import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './styles.module.scss'

function CustomCarousel({data}){
    return(
        <Carousel showArrows={false} showStatus={false} className={styles.carouselContainer}>
            {data?.previewImg?.map((item) => (
                <div style={{margin:"0 20px"}}>
                    <img src={item} className={styles.img}/>
                </div>
            ))}
        </Carousel>
    )
}

export default CustomCarousel;