import { CartItem } from "./CartItem"

function Cart (list) {

    return (
        <div>
            {list.map(e => CartItem(e))}
        </div>
    )
}

export default Cart;