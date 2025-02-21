import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import categoryOne from "../../assets/images/categoryOne.png"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NewDropCard from "../../components/NewDropCard";
import OrderSummaryCard from "../../components/OrderSummaryCard";
import { useParams } from "react-router-dom";

export default function Cart(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    const handleQuantity = (val) => {
        if(quantity !== 1 || val !== -1){
            setQuantity(prev => prev + val)
        }
    }

    return(
        <div className={styles.rootContainer}>
            <div className={styles.savingContainer}>
                <Typography className={styles.header}>Saving to celebrate</Typography>
                <span className={styles.label}>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</span>
                <span className={styles.label}>Join us  or Sign-in</span>
            </div>
            
            <div className={styles.checkoutContainer}>
                <div className={styles.productCard}>
                    <Typography className={styles.header}>Your Bag</Typography>
                    <span>Items in your bag not reserved- check out now to make them yours.</span>
                    
                    <div style={{display:"flex", flexDirection:"column", gap:"20px", marginTop:"20px"}}>
                        {[1].map((item) => (
                            <div className={styles.detailsContainer}>
                                <img 
                                    src={categoryOne} 
                                    className={styles.categoryImg}
                                />
                                <div className={styles.subDetailsContainer}>
                                    <div className={styles.productHeader}>
                                        <>
                                            <Typography className={styles.header}>Shoe brand Name*</Typography>
                                            <label className={styles.label}>Shoe brands description </label>
                                       
                                            <div className={styles.sizeContainer}>
                                                <div className={styles.label}>Size 10 </div>
                                                <div className={styles.label}>
                                                    Quantity {quantity} <KeyboardArrowUpIcon onClick={() => handleQuantity(1)} fontSize="medium" style={{position:"relative", top:"5px"}}/> <KeyboardArrowDownIcon onClick={() => handleQuantity(-1)} fontSize="medium" style={{position:"relative", top:"5px"}}/>
                                                </div>
                                            </div>

                                            {!isMobile && <DeleteForeverOutlinedIcon fontSize="large" style={{marginTop:"5px",}}/>}
                                        </>
                                    </div>
                                    <div style={{display:"flex", flexDirection:"row", gap:"20px", justifyContent:"space-between"}}>
                                        <div className={styles.amount}>$1340</div>
                                        {isMobile && <DeleteForeverOutlinedIcon fontSize="small" style={{marginTop:"5px"}}/>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>

                <OrderSummaryCard />
            </div>
            <div className={styles.newDropContainer}>
                <div className={styles.dropContent}>
                    <Typography className={styles.header}>You may also like</Typography>
                    <button className={styles.button}>EXPLORE</button>
                </div>

                <NewDropCard />
            </div>
        </div>
    )
}