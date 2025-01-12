import React from "react";
import styles from "./styles.module.scss";
import preview from "../assets/images/cartPreview/preview.svg"
import previewTwo from "../assets/images/cartPreview/previewTwo.svg"
import previewThree from "../assets/images/cartPreview/previewThree.svg"
import previewFour from "../assets/images/cartPreview/previewFour.svg"
import { Typography, useMediaQuery } from "@mui/material";
import ColorSizePallate from "../components/ColorSizePallate";
import CustomButton from "../components/CustomButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CustomCarousel from "../components/CustomCarousel";
import NewDropCard from "../components/NewDropCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Product(){
    const isMobile = useMediaQuery("(max-width:1024px)");

    const tempObj = {
        header: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
        color: ['#000', 'green'],
        size: [38,41,42,43,44, 45, 46,],
        price: '$125.00',
        previewImg: [preview, previewTwo, previewThree, previewFour]
    }

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };
    
    const handlePrevious = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };
    
    return(
        <div>
            <div className={styles.rootContainer}>
                {isMobile ? <CustomCarousel data={tempObj} /> :
                    <div className={styles.previewRootContainer}>
                        <div className={styles.previewContainer}>
                            <div className={styles.previewOne}  style={{ backgroundImage: `url(${preview})`, borderTopLeftRadius: "48px" }}/>
                            <div className={styles.previewOne} style={{ backgroundImage: `url(${previewTwo})`, borderTopRightRadius: "48px"}}/>
                        </div>

                        <div className={styles.previewContainer}>
                            <div className={styles.previewOne} style={{ backgroundImage: `url(${previewThree})`, borderBottomLeftRadius: "48px" }}/>
                            <div className={styles.previewOne} style={{ backgroundImage: `url(${previewFour})`, borderBottomRightRadius: "48px" }}/>
                        </div>
                    </div>
                }

                <div className={styles.checkoutContainer}>
                    <Typography className={styles.header}>{tempObj.header}</Typography>
                    <Typography className={styles.price}>{tempObj.price}</Typography>
                    <ColorSizePallate data={tempObj} selectedPallate={{color: '#000', size: 38}}/>

                    <div className={styles.btnContainer}>
                        <div className={styles.rowBtn}>
                            <CustomButton children="ADD TO CART" sx={{backgroundColor:"#000", color: "#fff", width:"100%"}}/>
                            <CustomButton children={<FavoriteBorderIcon />} sx={{backgroundColor:"#000", color: "#fff", width: "fit-content"}}/>
                        </div>
                       <CustomButton children="BUY IT NOW" sx={{backgroundColor:"#4A69E2", color: "#fff"}}/>
                    </div>

                    <div className={styles.aboutContainer}>
                        <Typography className={styles.header}>About the product</Typography>
                        <Typography className={styles.subHeader}>Shadow Navy / Army Green</Typography>
                        <Typography className={styles.subHeader}>This product is excluded from all promotional discounts and offers.</Typography>
                        <ul>
                            <li className={styles.subHeader}>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
                            <li className={styles.subHeader}>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
                        </ul>
                    </div>
                </div>
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