import React from "react";
import { Typography } from "@mui/material";
import styles from "./styles.module.scss";
import CustomButton from "../CustomButton";

const OrderSummaryCard = () => {
    return (
        <div className={styles.summaryCard}>
            <Typography className={styles.header} sx={{padding:"16px"}}>Order Summary</Typography>
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
    )
}

export default OrderSummaryCard;
