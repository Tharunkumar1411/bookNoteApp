import React, { useRef } from "react";
import { Typography } from "@mui/material";
import styles from "./styles.module.scss";
import drop1 from "../../assets/images/drop1.svg"
import drop2 from "../../assets/images/drop2.svg"
import drop3 from "../../assets/images/drop3.svg"
import drop4 from "../../assets/images/drop4.svg"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../App/src/router/routes";
import { Carousel } from "react-responsive-carousel";
import { responsiveLike } from "../../utils/constants";

const mapObject = [
    {imgUrl: drop1, productName: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", amount: "$125"},
    {imgUrl: drop2, productName: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", amount: "$125"},
    {imgUrl: drop3, productName: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", amount: "$125"},
    {imgUrl: drop4, productName: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", amount: "$125"},
]

const NewDropCard = ({isCarousel = false}) => {
    const navigate = useNavigate();
    const carouselRef = useRef(null);
    
    const handleProduct = () => {
        navigate(ROUTES.PRODUCT);
    }
    
    return (
        // <div className={styles.rootContainer}>
        //     {mapObject.map((item, index) => (
        //         <div key={index} className={styles.dropContainer}>
        //             <div className={styles.imageContainer}>
        //                 <div className={styles.imgCard} 
        //                     style={{
        //                         backgroundImage: `url(${item.imgUrl})`,
        //                         backgroundSize: 'cover',
        //                         backgroundPosition: 'center',
        //                         backgroundRepeat: 'no-repeat'
        //                     }}
        //                 />
        //             </div>

        //             <Typography className={styles.productName}>{item.productName}</Typography>

        //             <button onClick={handleProduct} className={styles.productButton}>View Product - <span style={{color: "#FFA52F"}}>{item.amount}</span></button>
        //         </div>  
        //     ))}
        // </div>

        <>
            {(isCarousel) ? 
                <Carousel
                    responsive={responsiveLike}
                    ref={carouselRef}
                    showDots={false}
                    arrows={false}
                >
                <div className={styles.rootContainer}>
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

                            <button onClick={handleProduct} className={styles.productButton}>View Product - <span style={{color: "#FFA52F"}}>{item.amount}</span></button>
                        </div>  
                    ))}
                </div>
             </Carousel>
            :   
                <div className={styles.rootContainer}>
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

                            <button onClick={handleProduct} className={styles.productButton}>View Product - <span style={{color: "#FFA52F"}}>{item.amount}</span></button>
                        </div>  
                    ))}
                </div>
            }
        </>
    )
}

export default NewDropCard;
