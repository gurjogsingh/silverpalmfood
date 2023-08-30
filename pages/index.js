import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'


export const getServerSideProps = async (context) => {

    const myCookie = context.req?.cookies || "";

    let admin = false;

    if(myCookie.token === process.env.TOKEN){
      admin = true;
    }

    const response = await axios.get("http://localhost:3000/api/products");
    return {
      props:{
        productList: response.data,
        admin: admin,
      },
    }
}

export default function Home({productList, admin}) {

  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      
      <Head>
        <title>Silver Palm Hotel Food Ordering</title>
        <meta name="description" content="Order food from Silver Palm Hotel, Kilifi, Kenya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      {admin && <AddButton setClose = {setClose}/>}
      <ProductList productList = {productList}/>
      {!close && <Add setClose = {setClose}/>}
    </div>
  )
}


