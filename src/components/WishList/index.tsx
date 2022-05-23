
import { Wish } from '../../types/ecommerce';
import styles from '../CartList/CartList.module.scss';

type Props =
{
    wishList: Wish[],
    remove: (uuid: string) => void
}

const WishList = ({
    wishList,
    remove
}: Props): JSX.Element =>
{
    return (
        <div className={`${styles.wrapper} ${styles.wishList}`}>
        <h2>WishList</h2>
        <ul>
        {   wishList && wishList.length ?
                wishList.map((item, index) => 
                (
                    <li key={index}>
                    <p>{item.title}</p>
                    <div className={styles.cartOptions}>
                        <div className={`${styles.btn} ${styles.x}`} onClick={() => remove(item.uuid)}>x</div>
                    </div>
                    </li>
                ))
            :
                "La lista dei desideri è vuota."
        }
        </ul>
      </div>
    );
}

export default WishList;