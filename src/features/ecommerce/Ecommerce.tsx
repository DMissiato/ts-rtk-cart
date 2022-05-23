
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useGetActivitiesQuery } from '../../services/activities';
import {
  add,
  remove,
  increaseQuantity,
  decreaseQuantity,
  selectAllActivities
} from './cartSlice';
import { add as addWish, remove as removeWish, selectAllWishes } from './wishListSlice';
import { WishListAddable } from '../../components/ActivityCard/types';
import ActivityCard from '../../components/ActivityCard';
import CartList from '../../components/CartList';
import WishList from '../../components/WishList';
import styles from './Ecommerce.module.scss';


const Ecommerce = () =>
{
  const cart = useAppSelector(selectAllActivities);
  const wishList = useAppSelector(selectAllWishes);
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetActivitiesQuery(12, {
    selectFromResult: ({ data, error, isLoading}) =>
    ({
      data: data ? data.data : [],
      error,
      isLoading
    })
  });


  return (
    <>

      <div className={styles.activitiesWrapper}>
        <ul>
          {
            data.map((value, index) => 
            {
              const isAddable: boolean = !cart.find(val => val.uuid === value.uuid);

              const isWishAddable: boolean = !wishList.find(val => val.uuid === value.uuid);
              const wish: WishListAddable = {
                isAddable: isWishAddable, 
                fn: (isWishAddable ? 
                      () => dispatch(addWish(value)) 
                    : 
                      () => dispatch(removeWish(value.uuid)))
              };


              return (
                <li key={index}>
                  <ActivityCard value={value} 
                    addToCart={isAddable ? () => dispatch(add(value)) : undefined} 
                    addToWishList={wish} 
                  />
                </li>
              );
            })
          }
          </ul>
      </div>

      <CartList cart={cart} 
        increaseQnt={(uuid) => dispatch(increaseQuantity(uuid))}
        decreaseQnt={(uuid) => dispatch(decreaseQuantity(uuid))}
        remove={(uuid) => dispatch(remove(uuid))} 
      />

      <WishList wishList={wishList} remove={(uuid) => dispatch(removeWish(uuid))} />

    </>
  );
}

export default Ecommerce