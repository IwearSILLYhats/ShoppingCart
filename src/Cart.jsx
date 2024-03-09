import CartItem from "./components/CartItem"
import { useOutletContext } from "react-router-dom";
import styles from "./styles/Cart.module.css"

function Cart () {
    const [cart, setCart] = useOutletContext();
    const total = cart.reduce(
        (acc, cur) => acc + (cur.price * cur.quantity), 
        0,
    )

    return (
        <ul className={styles.cart}>
            {cart.length ? cart.map((e) => <CartItem key={e.id} item={e} fns={[cart, setCart]} />) :
            <p>No items in cart</p>
            }
            <div className={styles.checkout}>
            <p>Total: ${total.toFixed(2)}</p>
            <button>Checkout</button>
            </div>
        </ul>
    )
}

export default Cart;