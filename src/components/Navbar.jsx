import styles from "../styles/Navbar.module.css"
import Logo from "./Logo"
import { Link } from "react-router-dom"

function Navbar ({count}) {
    let total = 0;
    count.forEach((e) => total += e.quantity);
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
                        Cart {total}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar