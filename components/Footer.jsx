import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerItem}>
                <Image src = "/images/bg.jpg" layout="fill" alt="" objectFit="cover"/>
            </div>
            <div className={styles.footerItem}>
                <div className={styles.footerCard}>
                    <h2 className={styles.footerMotto}>An Epitome of Luxury to Rejuvenate Your Senses.</h2>
                </div>
                <div className={styles.footerCard}>
                    <h1 className={styles.footerTitle}>OUR LOCATION</h1>
                    <p className={styles.footerText}> Bofa Beach Road,</p>
                    <p className={styles.footerText}> Kilifi, Kenya</p>
                    <h1 className={styles.footerTitle} style={{marginTop: '30%'}}>CONTACT US</h1>
                    <p className={styles.footerText}> email: info@silverpalmkilifi.co.ke</p>
                    <p className={styles.footerText}> tel: +254 780 745837</p>
                    <p className={styles.footerText}> fax: +254 707 745837</p>
                </div>
                <div className={styles.footerCard}>
                    <h1 className={styles.footerTitle}>WORKING HOURS</h1>
                    <p className={styles.footerText}> MONDAY UNTIL FRIDAY<br/> 9:00 - 22:00</p>
                    <p className={styles.footerText}> SATURDAY - SUNDAY<br/> 12:00 - 24:00</p>
                </div>
            </div>
            
        </div>
    )
};

export default Footer;