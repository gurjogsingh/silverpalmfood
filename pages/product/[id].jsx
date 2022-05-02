
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {

    const product = {
        id:1,
        image: "/images/pizza.png",
        name: "TASTY FOOD",
        price: 20.00,
        description: "tastes very nice"
    };

    return(
        <div className={styles.productContainer}>
            <div className={styles.productLeft}>
                <div className={styles.productImageContainer}>
                    <Image src = {product.image} layout="fill" alt="hi" objectFit="contain"/>
                </div>
            </div>
            <div className={styles.productRight}> 
                <h1 className={styles.productName}>{product.name}</h1>
                <span className={styles.productPrice}>KES {product.price}</span>
                <p className={styles.description}>{product.description}</p>

                <div className={styles.productAdd}>
                    <input type="number" defaultValue={1} className={styles.productQuantity}/>
                    <button className={styles.productButton}>Add to Cart</button>
                </div>
            </div>

        </div>
    );

};

export default Product;