import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

const index = ({orders, products}) => {
    const [productList, setProductList] = useState(products);
    const [orderList, setOrderList] = useState(orders);
    const status = ["preparing", "on the way", "delivered"];

    const handleDelete = async (id) => {
        try{
            const response = await axios.delete("http://localhost:3000/api/products/" + id);
            setProductList(productList.filter( (product) => product._id !== id));
        } catch(error){
            console.log(error)
        }
    }

    const handleStatus = async (id) => {
        const order = orderList.filter( order => order._id === id)[0];
        const currentStatus = order.status;

        try{ 
            const response = await axios.put("http://localhost:3000/api/orders/" + id, {status: currentStatus+1 })
            setOrderList([
                response.data, ...orderList.filter((order) => order._id !== id),
            ]);
        } catch(error){
            console.log(error)
        }
    }

    return (
        <div className={styles.adminContainer}>
            <div className={styles.adminItem}>
                <h1 className={styles.adminTitle}>Products</h1>
                <table className={styles.adminTable}>
                    <tbody>
                        <tr className={styles.adminTrTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </tbody>
                    
                        {productList.map( (product) => (
                            <tbody key={product._id}>
                            <tr className={styles.adminTrTitle}>
                            <Image src = {product.image} width={50} height={50} objectFit='cover' alt=""/>
                            <td>{product._id.slice(0, 6)}...</td>
                            <td>{product.title}</td>
                            <td>KES {product.price}</td>
                            <td>
                                <button className={styles.adminButton}>Edit</button>
                                <button className={styles.adminButton} onClick = {() => handleDelete(product._id)}>Delete</button>
                            </td>

                            </tr>
                            </tbody>
                        ))}
                        
                    
                </table>
            </div>
            <div className={styles.adminItem}>
                <h1 className={styles.adminTitle}>Orders</h1>
                <table className={styles.adminTable}>
                        <tbody>
                            <tr className={styles.adminTrTitle}>
                                <th>Id</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </tbody>
                        {orderList.map( (order) => (
                            <tbody key = {order._id}>
                            <tr className={styles.adminTrTitle}>
                                <td>{order._id.slice(0, 6)}...</td>
                                <td>{order.customer}</td>
                                <td>KES {order.total}</td>
                                <td>{order.payment === 0 ? <span>Cash</span> : <span>Paid</span>}</td>
                                <td>{status[order.status]}</td>
                                <td>
                                    <button className={styles.adminButton} onClick = {() => handleStatus(order._id)}>Next Stage</button>
                                </td>

                            </tr>
                        </tbody>

                        ))}
                        
                    </table>
            </div>

        </div>
    )
}

export const getServerSideProps = async (context) => {

    const myCookie = context.req?.cookies || "";
    if (myCookie.token !== process.env.TOKEN){
        return{
            redirect: {
                destination: "/admin/login",
                permanent: false,
            },
        };
    }
    const productResponse = await axios.get("http://localhost:3000/api/products");
    const orderResponse = await axios.get("http://localhost:3000/api/orders");

    return{
        props: {
            orders: orderResponse.data,
            products: productResponse.data,
        }
    }
}

export default index;