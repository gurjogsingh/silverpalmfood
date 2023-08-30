import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";

const Login = () => {


    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();


    const handleSignin = async () => {

        try {

            await axios.post("http://localhost:3000/api/login", {
                username: username,
                password: password,
            });
            router.push("/admin");

        } catch(error) {

            console.log(error);
            setError(true);
        }

    }


    return(
        <div className={styles.loginContainer}>
            <div className={styles.loginWrapper}>
                <h1>Admin Dashboard</h1>
                <input
                placeholder="username"
                className={styles.loginInput}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                placeholder="password"
                type="password"
                className={styles.loginInput}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSignin} className={styles.loginButton}>
                Sign In
                </button>
                {error && <span className={styles.loginError}>Wrong Credentials!</span>}
            </div>

        </div>
    )
}

export default Login;