import { useState } from "react";
import styles from "../styles/CartItem.module.css"
import CartCrud from "./CartCrud";

function CartItem ({item, fns}) {
    return (
        <li className={styles.cartItem}>
            <picture>
                <img src={item.image} alt={item.title} />
            </picture>
            <div>
                <h3>{item.title}</h3>
                <h4>${item.price.toFixed(2)}</h4>
                <p>{item.description}</p>
            </div>
            <CartCrud cart={fns[0]} setCart={fns[1]} product={item} />
        </li>
    )
}

export default CartItem;