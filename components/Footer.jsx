import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerItem}>
                <Image src = "images/bg.jpg" layout="fill" alt=""/>
            </div>
            <div className={styles.footerItem}>
                <div className={styles.footerCard}>
                    <h2 className={styles.footerMotto}>A MOTTO?</h2>
                </div>
                <div className={styles.footerCard}>
                    <h1 className=""></h1>
                </div>
                <div className={styles.footerCard}></div>
            </div>
            
        </div>
    )
};

export default Footer;