import styles from "../styles/Navbar.module.css"
import Logo from "./Logo"
import { Link } from "react-router-dom"

function Navbar () {
    return (
        <nav className={styles.navbar}>
            <Link to={`/`}>
            <Logo />
            </Link>
            <ul>
                <li>
                    <Link to={`store`}>
                    Store
                    </Link>
                </li>
                <li>
                    <Link to={`blog`}>
                    Blog
                    </Link>
                </li>
                <li>
                    <Link to={`contact`}>
                    Contact Us
                    </Link>
                </li>
                <li>
                    <Link to={`cart`}>
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar