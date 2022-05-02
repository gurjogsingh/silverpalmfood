import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
        <div className={styles.productListContainer}>
            <h1 className={styles.productListTitle}>TITLE OF THE THING</h1>
            <p className={styles.productListDescription}> Lorem ipsum text whatever</p>
            <div className={styles.productListWrapper}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>

        
    )
};

export default ProductList;