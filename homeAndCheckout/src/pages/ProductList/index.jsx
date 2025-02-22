import React, { useState } from "react";
import { FormControl, InputBase, NativeSelect, styled, Typography } from "@mui/material";
import productBanner from "../../assets/images/productBanner.png";
import styles from "./styles.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ProductList(){
    const [category, setCategory] = useState("Life Style");

    const handleCateogry = () => {

    }

    return(
        <div className={styles.rootContainer}>
            <div className={styles.topBanner} style={{backgroundImage:`url(${productBanner})`}}>
                <div className={styles.bannerContent}>
                    <Typography className={styles.label}>Limited time only</Typography>
                    <Typography className={styles.header}>Get 30% off</Typography>
                    <Typography className={styles.label}>Sneakers made with your comfort in mind so you can put all of your focus into your next session.</Typography>
                </div>
            </div>

            <div className={styles.catergoryContainer}>
                <Typography className={styles.category}>Life Style Shoes <label className={styles.label}>122 item</label></Typography>
                <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                    <button onClick={handleCateogry} className={styles.categoryBtn}>{category} <KeyboardArrowDownIcon /></button>
                    <div className={styles.categoryList}>
                        <div>
                            {["Life Style", "Sports", "Casuals", "Trending"].map((item) => (
                                <Typography>{item}</Typography>
                            ))}
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}