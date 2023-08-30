import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard";

const ProductList = ({productList}) => {
    
    return (
        <div className={styles.productListContainer}>
            <h1 className={styles.productListTitle}>Our Silver Menu in your Palm</h1>
            <p className={styles.productListDescription}> Please select an item you'd like to order.</p>
            <div className={styles.productListWrapper}>
                {productList.map((product) => (
                    <ProductCard key ={product._id} product ={product}/>
                ))}
            </div>
        </div>

        
    )
};

export default ProductList;