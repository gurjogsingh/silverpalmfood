import styles from "../styles/Add.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({setClose}) => {

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);

    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dmuvuyia4/image/upload", data);

        const {url} = uploadResponse.data;
        const newProduct = {
            title: title,
            image: url,
            description: description,
            price: price,
        }

        await axios.post("http://localhost:3000/api/products", newProduct);
        setClose(true);
        } catch(error){
            console.log(error);
        }
    }

    return(
        <div className={styles.addContainer}>
            <div className={styles.addWrapper}>
                <span className = {styles.addClose} onClick={() => setClose(true)}>
                    X
                </span>
                <h1>Add a new Product</h1>
                <div className={styles.addItem}>
                    <label className={styles.addLabel}>Choose and image</label>
                    <input type = "file" onChange = {(e) => setFile(e.target.files[0])}/>
                </div>
                <div className={styles.addItem}>
                    <label className={styles.addLabel}>Title</label>
                    <input
                        className={styles.addInput}
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.addItem}>
                    <label className={styles.addLabel}>Description</label>
                    <textarea
                        rows={4}
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.addItem}>
                    <label className={styles.addLabel}>Price</label>
                    <input
                        className={styles.addInput}
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <button className={styles.addButton} onClick={handleCreate}>Create</button>
                </div>
            </div>

        </div>
    )
}

export default Add;