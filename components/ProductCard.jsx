import styles from "../styles/ProductCard.module.css";
import Image from "next/image";

const ProductCard = () => {

    return (
        <div className={styles.productCardContainer}>
            <Image src = "/images/pizza.png" alt="" width= "500" height="500"/>
            <h1 className={styles.productCardTitle}>NAME OF FOOD</h1>
            <span className={styles.productCardPrice}>$20.00</span>
            <p className={styles.productCardDescription}>
                Provide some description of the food
            </p>


            
        </div>
    )
};

export default ProductCard;