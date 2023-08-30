import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({total, createOrder}) => {

    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleOrderClick = () => {
        createOrder({
            customer: customer,
            address: address,
            total: total,
            payment: 0
        })
    };

    return (
        <div className={styles.orderDetailContainer}>
            <div className={styles.orderDetailWrapper}>
                <h1 className = {styles.orderDetailTitle}> You will pay KES 12 after delivery.</h1>
                <div className={styles.orderDetailItem}>
                    <label className={styles.orderDetailLabel}>Name Surname</label>
                    <input placeholder="Your name" type="text" className={styles.orderDetailInput} onChange = {(e) => setCustomer(e.target.value)}/>

                </div>
                <div className={styles.orderDetailItem}>
            <label className={styles.orderDetailLabel}>Phone Number</label>
            <input
                type="text"
                placeholder="Add phone no."
                className={styles.orderDetailInput}
            />
            </div>
            <div className={styles.orderDetailItem}>
            <label className={styles.orderDetailLabel}>Address</label>
            <textarea
                rows={5}
                placeholder="Add address"
                type="text"
                className={styles.orderDetailInput}
                onChange={(e) => setAddress(e.target.value)}
            />
            </div>
            <button className={styles.orderDetailButton} onClick = {handleOrderClick} >
            Order
            </button>
            </div>

        </div>
    )

};

export default OrderDetail;