import styles from "../styles/Footer.module.css"
import facebook from "/src/assets/facebook.svg"
import googlePlay from "/src/assets/googlePlay.svg"
import instagram from "/src/assets/instagram.svg"
import pinterest from "/src/assets/pinterest.svg"
import youtube from "/src/assets/youtube.svg"

function Footer () {
    return (
        <footer className={styles.footer}>
            <div id="links">
            <ul>
                <h5>Help</h5>
                <li>Order Status</li>
                <li>Return + Exchanges</li>
                <li>Shipping</li>
                <li>Orders + Payments</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
            <ul>
                <h5>Quick Links</h5>
                <li>Brand</li>
                <li>Gift Cards</li>
                <li>Careers</li>
            </ul>
            <ul>
                <li>Store Locator</li>
                <li>Sign up for Email</li>
            </ul>
            </div>
            <div id="icons">    
            <img src={googlePlay} alt="Get it on Google Play" />
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={pinterest} alt="Pinterest" />
            <img src={youtube} alt="Youtube" />
            </div>
            <div id="bottom-links">
                <div>
                    <p>Privacy Policy</p>
                    <p>|</p>
                    <p>Terms of Use</p>
                    <p>|</p>
                    <p>Accessibility</p>
                </div>
                <div>© 2024 Austin Moorer All Rights Reserved</div>
            </div>
        </footer>
    )
}

export default Footer