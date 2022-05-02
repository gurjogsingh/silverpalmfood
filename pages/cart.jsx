import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {

    return(
        <div className={styles.cartContainer}>
            <div className={styles.cartLeft}>
                <table className={styles.cartTable}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.cartImageContainer}>
                                <Image src="/images/pizza.png" alt="" layout="fill" objectFit="cover"/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.cartName}>PRODCUT NAME</span>
                        </td>
                        <td>
                            <span className={styles.cartPrice}>KES 20</span>
                        </td>
                        <td>
                            <span className={styles.cartQuantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.cartTotal}>$40</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.cartImageContainer}>
                                <Image src="/images/pizza.png" alt="" layout="fill" objectFit="cover"/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.cartName}>PRODCUT NAME</span>
                        </td>
                        <td>
                            <span className={styles.cartPrice}>KES 20</span>
                        </td>
                        <td>
                            <span className={styles.cartQuantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.cartTotal}>$40</span>
                        </td>
                    </tr>
                    
                </table>
            </div>
            <div className={styles.cartRight}>
                <div className={styles.cartWrapper}>
                    <h2 className={styles.cartTitle}>CART TOTAL</h2>
                    <div className={styles.cartTotalText}>
                        <b className={styles.cartTotalTextTitle}>Subtotal:</b>KES 40.00
                    </div>
                    <div className={styles.cartTotalText}>
                        <b className={styles.cartTotalTextTitle}>Discount:</b>KES 0.00
                    </div>
                    <div className={styles.cartTotalText}>
                        <b className={styles.cartTotalTextTitle}>Total:</b>KES 40.00
                    </div>
                    <button className={styles.cartButton}>CHECKOUT NOW!</button>
                </div>
                
            </div>

            
            
        </div>
    );

};

export default Cart;