import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";
import categoryOne from "../assets/images/categoryOne.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CustomButton from "../components/CustomButton";

export default function Checkout(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
                    
                    <div style={{marginTop: "48px", display:"flex", flexDirection:"column", gap:"20px"}}>
                        {[1,2].map((item) => (
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
                                                <div className={styles.label}>Size 10 <KeyboardArrowDownIcon style={{position:"relative", top:"5px"}}/></div>
                                                <div className={styles.label}>Quantity 1 <KeyboardArrowDownIcon style={{position:"relative", top:"5px"}}/></div>
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

                <div className={styles.summaryCard}>
                    <Typography className={styles.header}>Order Summary</Typography>
                    <div className={styles.summaryContent}>
                        <div className={styles.summaryRow}>
                            <Typography className={styles.label}>1 Item</Typography>
                            <Typography className={styles.label}>$130.00</Typography>
                        </div>
                        <div className={styles.summaryRow}>
                            <Typography className={styles.label}>Delivery</Typography>
                            <Typography className={styles.label}>$6.99</Typography>
                        </div>
                        <div className={styles.summaryRow}>
                            <Typography className={styles.label}>Sales Tax</Typography>
                            <Typography className={styles.label}>-</Typography>
                        </div>
                        <div className={styles.summaryRow}>
                            <Typography className={styles.header}>Total</Typography>
                            <Typography className={styles.header}>$1340</Typography>
                        </div>
                        <CustomButton children="CHECKOUT" sx={{backgroundColor:"#000", color: "#fff", width:"100%"}}/>
                        </div>
                   
                </div>
            </div>
        </div>
    )
}