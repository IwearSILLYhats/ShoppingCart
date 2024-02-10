function StoreItem (item) {
    return (
        <div>
            <picture>
                <img src={item.image} alt={item.title} />
            </picture>
            <div>
                <h3>{item.title} - {item.category}</h3>
                <h4>{item.price}</h4>
                <p>{item.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default StoreItem;