import styles from "../styles/Logo.module.css"

function Logo () {
    return (
        <div className={styles.logo}>
            <div>
                <picture>
                    <img src="src/assets/shirt.svg" alt="Shirt" />
                </picture>
                <h5>Fakestore</h5>
            </div>
        </div>
    )
}

export default Logo