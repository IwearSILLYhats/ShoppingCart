import CartItem from "./components/CartItem"

function Cart (list) {

    return (
        <div>
            {list ? list.map((e) => CartItem(e)) :
            <p>No items in cart</p>
            }
        </div>
    )
}

export default Cart;