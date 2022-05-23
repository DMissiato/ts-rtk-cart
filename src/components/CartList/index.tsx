
import { Activity } from '../../types/ecommerce';
import styles from './CartList.module.scss';

type Props =
{
    cart: Activity[],
    increaseQnt: (uuid: string) => void,
    decreaseQnt: (uuid: string) => void,
    remove: (uuid: string) => void
}

const CartList = ({ 
    cart,
    increaseQnt,
    decreaseQnt,
    remove
}: Props): JSX.Element =>
{
    return (
        <div className={styles.wrapper}>
            <h2>Cart</h2>
            <ul>
            {   
                cart && cart.length ?
                    cart.map((item, index) => 
                    (
                        <li key={index}>
                        <p>{item.title}</p>
                        <div className={styles.cartOptions}>
                            <div className={styles.btn} onClick={() => increaseQnt(item.uuid)}>+</div>
                            <div>{item.quantity}</div>
                            <div className={styles.btn} onClick={() => decreaseQnt(item.uuid)}>-</div>
                            <div className={`${styles.btn} ${styles.x}`} onClick={() => remove(item.uuid)}>x</div>
                        </div>
                        </li>
                    ))
                :
                    "Il carrello è vuoto."
            }
            </ul>
        </div>
    )
}

export default CartList;