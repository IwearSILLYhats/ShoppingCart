import styles from "../styles/StoreItem.module.css"

function StoreItem ({item}) {
    return (
        <div className={styles.storeItem}>
            <picture>
                <img src={item.image} alt={item.title} />
            </picture>
            <div>
                <h3>{item.title} - {item.category}</h3>
                <h4>${item.price}</h4>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default StoreItem;