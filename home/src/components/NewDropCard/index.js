import React from "react";
import { Grid, Typography, colors } from "@mui/material";
import styles from "./styles.module.scss";
import drop1 from "../../assets/images/drop1.svg"
import drop2 from "../../assets/images/drop2.svg"
import drop3 from "../../assets/images/drop3.svg"
import drop4 from "../../assets/images/drop4.svg"

const mapObject = [
    {imgUrl: drop1, productName: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", amount: "$125"},
    {imgUrl: drop2, productName: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", amount: "$125"},
    {imgUrl: drop3, productName: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", amount: "$125"},
    {imgUrl: drop4, productName: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", amount: "$125"},
]

const NewDropCard = () => {
    
    return (
        <div className={styles.gridContainer}>
            {mapObject.map((item, index) => (
                <div key={index} className={styles.dropContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imgCard} 
                            style={{
                                backgroundImage: `url(${item.imgUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                    </div>

                    <Typography className={styles.productName}>{item.productName}</Typography>

                    <button className={styles.productButton}>View Product - <span style={{color: "#FFA52F"}}>{item.amount}</span></button>
                </div>  
            ))}
        </div>
    )
}

export default NewDropCard;
