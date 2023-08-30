
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";


const Product = ({product}) => {

    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(product.price);
    const dispatch = useDispatch();

    const handleAddCartClick = () => {
        dispatch(addProduct({...product, price, quantity}))
    };
    
    return(
        <div className={styles.productContainer}>
            <div className={styles.productLeft}>
                <div className={styles.productImageContainer}>
                    <Image src = {product.image} layout="fill" alt="hi" objectFit="contain"/>
                </div>
            </div>
            <div className={styles.productRight}> 
                <h1 className={styles.productName}>{product.title}</h1>
                <span className={styles.productPrice}>KES {product.price}</span>
                <p className={styles.description}>{product.description}</p>

                <div className={styles.productAdd}>
                    <input type="number" defaultValue={1} className={styles.productQuantity} onChange={(e) => setQuantity(e.target.value)}/>
                    <button className={styles.productButton} onClick = {handleAddCartClick}>Add to Cart</button>
                </div>
            </div>

        </div>
    );

};

export default Product;

export const getServerSideProps = async ({params}) => {
    const response = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
      props:{
        product: response.data,
      },
    }
}
