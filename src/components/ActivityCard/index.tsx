
import { WishListAddable } from './types';
import { Activity } from '../../types/ecommerce';
import styles from './ActivityCard.module.scss';


type Props =
{
    value: Activity
    addToCart?: () => void,
    addToWishList?: WishListAddable
}

const ActivityCard = ({
    value,
    addToCart,
    addToWishList
}: Props): JSX.Element =>
{   
    return (
        <div className={styles.wrapper}>
            <div className={styles.img} style={{ backgroundImage: `url(${value.cover_image_url})`}}></div>
                  <h4>{value.title}</h4>
                  <div className={styles.details}>
                    {
                      addToCart &&
                        <div role="cart" className={styles.addToCart} onClick={addToCart}>+</div>
                    }
                    <div className={styles.price}>{value.retail_price.formatted_iso_value}</div>
                    {
                      addToWishList &&
                        (
                            addToWishList.isAddable ?
                                <div role="wish" className={styles.addToWishlist} onClick={addToWishList.fn}></div>
                            :
                                <div role="wish" className={`${styles.addToWishlist} ${styles.active}`} onClick={addToWishList.fn}></div>
                        )
                    }
                  </div>
        </div>
    );
}

export default ActivityCard;