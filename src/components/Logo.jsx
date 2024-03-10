import styles from "../styles/Logo.module.css"
import logo from "../assets/shirt.svg"

function Logo () {
    return (
        <div className={styles.logo}>
            <div>
                <picture>
                    <img src={logo} alt="Shirt" />
                </picture>
                <h5>Fakestore</h5>
            </div>
        </div>
    )
}

export default Logo