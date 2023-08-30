import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarItem}>
            <div className={styles.navbarCallButton}>
                <Image src = "/images/telephone.png" alt="telephone.png" width="32" height="32"/>
            </div>
            <div className={styles.navbarTexts}>
                <div className={styles.navbarText}> Order Now!</div>
                <div className={styles.navbarText}> 0715095410</div>

            </div>
            </div>
            <div className={styles.navbarItem}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarListItem}> Homepage</li>
                    <li className={styles.navbarListItem}> Products</li>
                    <li className={styles.navbarListItem}> Menu</li>
                    <Link href={'/'} passHref>
                    <Image src="/images/silverlogo.png"  alt="logo" width="190px" height="150px" style={{cursor:'pointer'}}/>
                    </Link>
                    <li className={styles.navbarListItem}> Events</li>
                    <li className={styles.navbarListItem}> Blog</li>
                    <li className={styles.navbarListItem}> Contact</li>
                </ul>
            </div>
            <div className={styles.navbarItem}>
                <Link href={'/cart'} passHref>
                    <div className={styles.navbarCart}>
                    <Image src="/images/cart.png"  alt="logo" width="30px" height="30px"/>
                    <div className={styles.navbarCounter}>{quantity}</div>
                    </div>
                </Link>
                
            </div>
        </div>
    )
};

export default Navbar;