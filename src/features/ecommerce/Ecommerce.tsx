
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  Activity,
  add,
  remove,
  increaseQuantity,
  decreaseQuantity,
  selectAllActivities
} from './cartSlice';
import { add as addWish, remove as removeWish, selectAllWishes } from './wishListSlice';
import styles from './Ecommerce.module.scss';

const Ecommerce = () =>
{
  const cart = useAppSelector(selectAllActivities);
  const wishList = useAppSelector(selectAllWishes);
  const dispatch = useAppDispatch();
  const [activities, setActivities] = useState<Activity[]>([]);


  useEffect(() =>
  {
    axios('https://api.musement.com/api/v3/activities?limit=6&offset=0')
      .then((data) =>
      {
        console.log(data.data.data);
        setActivities(data.data.data);
      });
  }, []);


  return (
    <>

      <div className={styles.activitiesWrapper}>
        <ul>
          {
            activities.map((value, index) => 
            (
              <li key={index}>
                <div className={styles.img} style={{ backgroundImage: `url(${value.cover_image_url})`}}></div>
                <h4>{value.title}</h4>
                <div className={styles.details}>
                  {
                    !cart.find(val => val.uuid === value.uuid) &&
                      <div className={styles.addToCart} onClick={() => dispatch(add(value))}>+</div>
                  }
                  <div className={styles.price}>{value.retail_price.formatted_iso_value}</div>
                  {
                    !wishList.find(val => val.uuid === value.uuid) ?
                      <div className={styles.addToWishlist} onClick={() => dispatch(addWish(value))}></div>
                      :
                      <div className={`${styles.addToWishlist} ${styles.active}`} onClick={() => dispatch(removeWish(value.uuid))}></div>
                  }
                </div>
              </li>
            ))
          }
          </ul>
      </div>

      <div className={styles.cartWrapper}>
        <h2>Cart</h2>
        <ul>
        {
          cart.map((item, index) => 
          (
            <li key={index}>
              <p>{item.title}</p>
              <div className={styles.cartOptions}>
                <div className={styles.btn} onClick={() => dispatch(increaseQuantity(item.uuid))}>+</div>
                <div>{item.quantity}</div>
                <div className={styles.btn} onClick={() => dispatch(decreaseQuantity(item.uuid))}>-</div>
                <div className={`${styles.btn} ${styles.x}`} onClick={() => dispatch(remove(item.uuid))}>x</div>
              </div>
            </li>
          ))
        }
        </ul>
      </div>

      <div className={`${styles.cartWrapper} ${styles.wishList}`}>
        <h2>WishList</h2>
        <ul>
        {
          wishList.map((item, index) => 
          (
            <li key={index}>
              <p>{item.title}</p>
              <div className={styles.cartOptions}>
                <div className={`${styles.btn} ${styles.x}`} onClick={() => dispatch(removeWish(item.uuid))}>x</div>
              </div>
            </li>
          ))
        }
        </ul>
      </div>

    </>
  );
}

export default Ecommerce