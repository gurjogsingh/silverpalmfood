
import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {

    const status = 0;

    const orderStatusClass = (index) => {
        if(index-status < 1){return styles.orderDone};
        if(index-status === 1){return styles.orderInProgress};
        if(index-status > 1){return styles.orderUndone};
    };

    return(
        <div className={styles.orderContainer}>
            <div className={styles.orderLeft}>
                <div className={styles.orderRow}>
                <table className={styles.orderTable}>
                    <tr className={styles.orderTrTitle}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.orderTr}>
                        <td>
                            <span className={styles.orderID}>20740u0402700832</span>
                        </td>
                        <td>
                            <span className={styles.orderName}>John Does</span>
                        </td>
                        <td>
                            <span className={styles.orderAddress}>djolfoahsnsind</span>
                        </td>
                        <td>
                            <span className={styles.orderTotal}>$40</span>
                        </td>
                    </tr>
                    
                </table>
                </div>
                <div className={styles.orderRow}>
                    <div className={orderStatusClass(0)}>
                        <Image src="/images/paid.png" alt="" width={30} height={30}/>
                        <span>Payment</span>
                        <div className={styles.orderCheckedIcon}>
                            <Image className={styles.orderCheckedIcon} src="/images/checked.png" alt="" width={20} height={20} />
                        </div>
                    </div>
                    <div className={orderStatusClass(1)}>
                        <Image src="/images/bake.png" alt="" width={30} height={30}/>
                        <span>Preparing</span>
                        <div className={styles.orderCheckedIcon}>
                            <Image className={styles.orderCheckedIcon} src="/images/checked.png" alt="" width={20} height={20} />
                        </div>
                    </div>
                    <div className={orderStatusClass(2)}>
                        <Image src="/images/bike.png" alt="" width={30} height={30}/>
                        <span>On the way!</span>
                        <div className={styles.orderCheckedIcon}>
                            <Image className={styles.orderCheckedIcon} src="/images/checked.png" alt="" width={20} height={20} />
                        </div>
                    </div>
                    <div className={orderStatusClass(3)}>
                        <Image src="/images/delivered.png" alt="" width={30} height={30}/>
                        <span>Delivered</span>
                        <div className={styles.orderCheckedIcon}>
                            <Image className={styles.orderCheckedIcon} src="/images/checked.png" alt="" width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.orderRight}>
            <div className={styles.orderWrapper}>
                    <h2 className={styles.orderTitle}>ORDER TOTAL</h2>
                    <div className={styles.orderTotalText}>
                        <b className={styles.orderTotalTextTitle}>Subtotal:</b>KES 40.00
                    </div>
                    <div className={styles.orderTotalText}>
                        <b className={styles.orderTotalTextTitle}>Discount:</b>KES 0.00
                    </div>
                    <div className={styles.orderTotalText}>
                        <b className={styles.orderTotalTextTitle}>Total:</b>KES 40.00
                    </div>
                    <button disabled className={styles.orderButton}>PAID</button>
                </div>
            </div>

            
        </div>
    );

};

export default Order;