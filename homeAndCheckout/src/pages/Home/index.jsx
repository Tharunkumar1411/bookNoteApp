import React, { Suspense, useEffect } from "react";
import { Typography } from "@mui/material";
import styles from "./styles.module.scss";
import NewDropCard from "../../components/NewDropCard";
import ReviewCard from "../../components/ReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { responsive } from "../../utils/constants";
import { getHomeDetails } from "../../api/home";
import Loader from "../../components/Loader";
import useHomeStore from "../../store/home";

const Home = () => {
    const carouselRef = useRef(null);
    const setHomeDetails = useHomeStore((state) => state.setHomeDetails);
    const homeDetails = useHomeStore((state) => state.homeDetails);

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

    useEffect(() => {
        getHomeDetails().then((res) => {
            setHomeDetails(res);
        });
    },[]);

    return (
        <Suspense fallback={<Loader />}>
            <div>
                <div className={styles.bannerContainer} style={{backgroundImage: `url(${homeDetails?.topBanner?.homeBannerUrl})`}}>

                    <div className={styles.bannerContentContainer}>
                        <div className={styles.bannerContent}>
                            <Typography className={styles.header}>{homeDetails?.topBanner?.productName}</Typography>
                            <span className={styles.subHeader}>{homeDetails?.topBanner?.description}</span>
                            <button className={styles.button}>SHOP NOW</button>
                        </div>

                        <div className={styles.previewBannerContainer}>
                            <div className={styles.previewOne} style={{backgroundImage: `url(${homeDetails?.topBanner?.previewUrlOne})`}}/>
                            <div className={styles.previewTwo} style={{backgroundImage: `url(${homeDetails?.topBanner?.previewUrlTwo})`}}/>
                        </div>
                    </div>
                </div>
                
                <div className={styles.newDropContainer}>
                    <div className={styles.dropContent}>
                        <Typography className={styles.header}>Don’t miss out new drops</Typography>
                        <button className={styles.button}>VIEW MORE</button>
                    </div>
                    
                    <NewDropCard />
                </div>

                <div className={styles.categoryRoot}>
                    <div className={styles.headerContainer}>
                        <h3 className={styles.header}>CATEGORIES</h3>
                        <div className={styles.buttonGroup}>
                            <ArrowBackIosNewIcon className={styles.arrowBtn} onClick={handlePrevious} />
                            <ArrowForwardIosIcon className={styles.arrowBtn} onClick={handleNext} />
                        </div>
                    </div>

                    {homeDetails?.categories &&
                        <div className={styles.categoryContainer}>
                            <Carousel 
                                responsive={responsive}
                                ref={carouselRef}
                                showDots={false}
                                arrows={false}
                            >
                                {homeDetails?.categories?.map((category, index) => (
                                <div 
                                    key={index} 
                                    style={{ backgroundImage: `url(${category.url})`, backgroundColor: '' }} 
                                    className={styles.categoryImg}
                                >
                                    <div className={styles.categoryTitle}>
                                        <Typography className={styles.title}>{category.categoryName}</Typography>
                                        <Typography className={styles.title}>Shoes</Typography>
                                    </div>
                                    <div className={styles.categoryLink}>
                                        <ArrowOutwardIcon className={styles.arrowLink} />
                                    </div>
                                </div>
                                ))}
                            </Carousel>
                        </div>
                    }
                </div>
                
                

                <div className={styles.newDropContainer}>
                    <div className={styles.dropContent}>
                        <Typography className={styles.header}>Reviews</Typography>
                        <button className={styles.button}>SEE ALL</button>
                    </div>
                    
                    <div className={styles.reviewRootContainer}>
                        {homeDetails?.review?.map((review, index) => (
                            <ReviewCard
                                key={index}
                                title={review.reviewTitle}
                                subText={review.reviewContent}
                                personImg={review.personImgUrl}
                                reviewImg={review.productUrl}
                                rating={review.rate}
                            />
                        ))}
                    </div>
                
                </div>
            </div>
        </Suspense>

    );
};

export default Home;
