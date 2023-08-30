import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({product}) => {

    return (
        <div className={styles.productCardContainer}>
            <Link href={`/product/${product._id}`} passHref>
                <Image src = {product.image} alt="" width= "500" height="500"/>
            </Link>
            <h1 className={styles.productCardTitle}>{product.title}</h1>
            <span className={styles.productCardPrice}>KES {product.price}</span>
            <p className={styles.productCardDescription}>
                {product.description}
            </p>


            
        </div>
    )
};

export default ProductCard;