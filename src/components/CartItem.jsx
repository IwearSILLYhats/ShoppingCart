function CartItem (item) {
    return (
        <div>
            <picture>
                <img src={item.image} alt={item.title} />
            </picture>
            <div>
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
            </div>
        </div>
    )
}

export default CartItem;