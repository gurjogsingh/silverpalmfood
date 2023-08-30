import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
  } from "@paypal/react-paypal-js";
import axios from "axios";
import Router, { useRouter } from "next/router";
import {reset} from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const router = useRouter();
    const [cash, setCash] = useState(false);

    const [open, setOpen] = useState(false);
    const amount = cart.total; //to account for USD
    const currency = "USD";
    const style = {"layout":"vertical"};
    
    const createOrder = async (data) => {
        try { 
            const response = await axios.post("http://localhost:3000/api/orders", data);
           
            if (response.status === 201){
                router.push("/orders/" + response.data._id);
            }

            dispatch(reset()); //reset the cart (using redux)
            
        } catch(error) {
            console.log(error);
        }
        
    };
    
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
        
    
        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);
    
    
        return (<>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            // Your code here after capture the order
                            const shipping = details.purchase_units[0].shipping;
                            createOrder({
                                customer: shipping.name.full_name,
                                address: shipping.address.address_line_1,
                                total: cart.total,
                                payment: 1, 
                                
                            });
                        });
                    }}
                />
            </>
        );
    }
    return(
        <div className={styles.cartContainer}>
            <div className={styles.cartLeft}>
                <table className={styles.cartTable}>
                    <tbody>
                    <tr className={styles.cartTrTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    </tbody>
                    <tbody>
                    {cart.products.map((product) => (
                         <tr className={styles.cartTr} key = {product._id}>
                         <td>
                             <div className={styles.cartImageContainer}>
                                 <Image src={product.image} alt="" layout="fill" objectFit="cover"/>
                             </div>
                         </td>
                         <td>
                             <span className={styles.cartName}>{product.title}</span>
                         </td>
                         <td>
                             <span className={styles.cartPrice}>KES {product.price}</span>
                         </td>
                         <td>
                             <span className={styles.cartQuantity}>{product.quantity}</span>
                         </td>
                         <td>
                             <span className={styles.cartTotal}>KES {product.price * product.quantity}</span>
                         </td>
                     </tr>
                     
 
                    ))}
                    </tbody>
                   
                    
                </table>
            </div>
            <div className={styles.cartRight}>
                <div className={styles.cartWrapper}>
                    <h2 className={styles.cartTitle}>CART TOTAL</h2>
                    <div className={styles.cartTotalText}>
                        <b className={styles.cartTotalTextTitle}>Subtotal:</b>KES {cart.total}
                    </div>
                    <div className={styles.cartTotalText}>
                        <b className={styles.cartTotalTextTitle}>Discount:</b>KES 0.00
                    </div>
                    <div className={styles.cartTotalText}>
                        <b className={styles.cartTotalTextTitle}>Total:</b>KES {cart.total}
                    </div>
                    {open ? (
                        <div className={styles.cartPaymentMethods}>
                            <button className={styles.cartCashOnDelivery} onClick={() => {setCash(true)}}>CASH ON DELIVERY</button>
                            <PayPalScriptProvider
                                options={{
                                "client-id": "AZ6tTuCl5lLNfdL5jUat4vGHTTE8z_3gJkxQj6JSC7_HD7fVs8oAq9XQ4fcOe8L3DiGS7TZNoAueLUki",
                                components: "buttons",
                                currency: "USD",
                                "disable-funding": "credit,card,p24",
                                    }}
                                >
                                <ButtonWrapper
                                    currency={currency}
                                    showSpinner={false}
                                />
                            </PayPalScriptProvider>

                        </div>
                        
                    ): (
                        <button className={styles.cartButton} onClick={() => {setOpen(true)}}>CHECKOUT NOW!</button>
                    )}
                    
                       
                </div>
                
            </div>

            {(cash) && (
                <OrderDetail total = {cart.total} createOrder = {createOrder}/>
            )}
            
        </div>
    );

};

export default Cart;