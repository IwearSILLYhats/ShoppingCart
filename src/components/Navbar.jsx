import styles from "../styles/Navbar.module.css"
import Logo from "./Logo"

function Navbar () {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <ul>
                <li>Menu</li>
                <li>Prices</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Navbar