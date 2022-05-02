import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
    const [slideNumber, setSliderNumber] = useState(0);
    
    const images = [
        "/images/featured1.jpg",
        "/images/featured2.jpg",
        "/images/featured3.jpg",
    ]

    const handleArrow = (direction) => {
        if(direction === "left"){
            setSliderNumber(slideNumber !== 0 ? slideNumber - 1 : 2)
        }
        if(direction === "right"){
            setSliderNumber(slideNumber !== 2 ? slideNumber + 1 : 0)
        }

    }

    return(
        <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper} style={{transform: `translateX(${-100*slideNumber}vw)`}}>

            {images.map((image, i) => (
            <div className={styles.sliderImageContainer} key = {i}>
                <Image  src={image} alt="" layout="fill" objectFit="contain" style={{borderRadius:"20%"}}/>
            </div>
            ))}
            </div>
            <div className={styles.sliderArrowContainer} style={{left:0}} onClick={()=>{handleArrow("left")}}>
                <Image src="/images/arrowl.png" alt="arrowl" layout="fill" objectFit="contain"/>
            </div>
            
            
            <div className={styles.sliderArrowContainer} style={{right:0}} onClick={()=>{handleArrow("right")}}>
                <Image src="/images/arrowr.png" alt="arrowr" layout="fill" objectFit="contain"/>
            </div>
            
        </div>
    )
};

export default Slider;