import styles from "../styles/StoreItem.module.css"
import { useOutletContext } from "react-router-dom";

function StoreItem ({item}) {

    const [cart, setCart] = useOutletContext();
    return (
        <div className={styles.storeItem}>
            <picture>
                <img src={item.image} alt={item.title} />
            </picture>
            <div>
                <h3>{item.title} - {item.category}</h3>
                <h4>${item.price.toFixed(2)}</h4>
                {(cart.some((e) => e.id === item.id)) ?
                <button disabled="disabled">Item Already in Cart</button> :
                <button onClick={(e) => {setCart([...cart, {...item, quantity: 1}])}}>Add to Cart</button>
}
            </div>
        </div>
    )
}

export default StoreItem;