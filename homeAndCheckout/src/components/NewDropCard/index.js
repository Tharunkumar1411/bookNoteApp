import React from "react";
import { Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import useHomeStore from "../../store/home";

const NewDropCard = () => {
    const navigate = useNavigate();
    const homeDetails = useHomeStore((state) => state.homeDetails);
    
    const handleProduct = (productId) => {
        navigate(`${ROUTES.PRODUCT}/${productId}`);
    }
    
    return (
        <div className={styles.rootContainer}>
            {homeDetails?.newDrops?.map((item, index) => (
                <div key={index} className={styles.dropContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imgCard} 
                            style={{
                                backgroundImage: `url(${item.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                    </div>

                    <Typography className={styles.productName}>{item.productName}</Typography>
                    <button onClick={() => handleProduct(item.productId)} className={styles.productButton}>View Product - <span style={{color: "#FFA52F"}}>{item.price}</span></button>
                </div>  
            ))}
        </div>
    )
}

export default NewDropCard;
