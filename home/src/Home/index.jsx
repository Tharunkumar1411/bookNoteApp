import React from "react";
import { Button, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import backgroundImage from "../assets/images/homeBanner.svg"
import previewBgOne from "../assets/images/previewOne.svg"
import previewBgTwo from "../assets/images/previewTwo.svg"
import NewDropCard from "../components/NewDropCard";
import ReviewCard from "../components/ReviewCard";
import reviewPersonOne from "../assets/images/reviewPersonOne.svg";
import reviewOne from "../assets/images/reviewOne.svg"
import reviewPersonTwo from "../assets/images/reviewPersonTwo.svg";
import reviewTwo from "../assets/images/reviewTwo.svg"
import reviewPersonThree from "../assets/images/reviewPersonThree.svg";
import reviewThree from "../assets/images/reviewThree.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import categoryOne from "../assets/images/categoryOne.png"
import categoryTwo from "../assets/images/categoryTwo.png"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const reviewData = [
    {
      title: "Good Quality",
      subText: "I highly recommend shopping from kicks",
      personImg: reviewPersonOne,
      reviewImg: reviewOne,
      rating: 5,
    },
    {
      title: "Great Service",
      subText: "Delivery was fast and efficient!",
      personImg: reviewPersonTwo,
      reviewImg: reviewTwo,
      rating: 4.5
    },
    {
        title: "Awesome Experience",
        subText: "The shopping experience was seamless",
        personImg: reviewPersonThree,
        reviewImg: reviewThree,
        rating: 4.8
      },
];

const categories = [
    { title1: "Basketball", title2: "Shoes", image: categoryTwo, bgCode: "#fff" },
    { title1: "Lifestyle", title2: "Shoes", image: categoryOne, bgCode: "#ECEEF0" },
    { title1: "Basketball", title2: "Shoes", image: categoryTwo, bgCode: "#fff" },
];

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1 
    }
};

const Home = () => {
    const carouselRef = useRef(null);

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

    const homeBannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const previewBannerOne = {
        backgroundImage: `url(${previewBgOne})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const previewBannerTwo = {
        backgroundImage: `url(${previewBgTwo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div>
            <div className={styles.bannerContainer} style={homeBannerStyle}>
                <div className={styles.bannerContentContainer}>
                    <div className={styles.bannerContent}>
                        <Typography className={styles.header}>NIKE AIR MAX</Typography>
                        <span className={styles.subHeader}>Nike introducing the new air max for everyone's comfort</span>
                        <button className={styles.button}>SHOP NOW</button>
                    </div>

                    <div className={styles.previewBannerContainer}>
                        <div className={styles.previewOne} style={previewBannerOne}/>
                        <div className={styles.previewTwo} style={previewBannerTwo}/>
                    </div>
                </div>
            </div>
            
            <div className={styles.newDropContainer}>
                <div className={styles.dropContent}>
                    <Typography className={styles.header}>Don’t miss out new drops</Typography>
                    <button className={styles.button}>SHOP NEW DROPS</button>
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
                <div className={styles.categoryContainer}>
                    <Carousel 
                        responsive={responsive}
                        ref={carouselRef}
                        showDots={false}
                        arrows={false}
                    >
                        {categories.map((category, index) => (
                        <div 
                            key={index} 
                            style={{ backgroundImage: `url(${category.image})`, backgroundColor: '' }} 
                            className={styles.categoryImg}
                        >
                            <div className={styles.categoryTitle}>
                            <Typography className={styles.title}>{category.title1}</Typography>
                            <Typography className={styles.title}>{category.title2}</Typography>
                            </div>
                            <div className={styles.categoryLink}>
                            <ArrowOutwardIcon className={styles.arrowLink} />
                            </div>
                        </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            

            <div className={styles.newDropContainer} style={{marginTop:"6rem"}}>
                <div className={styles.dropContent}>
                    <Typography className={styles.header}>Reviews</Typography>
                    <button className={styles.button}>SEE ALL</button>
                </div>
                
                <div className={styles.reviewRootContainer}>
                    {reviewData.map((review, index) => (
                        <ReviewCard
                            key={index}
                            title={review.title}
                            subText={review.subText}
                            personImg={review.personImg}
                            reviewImg={review.reviewImg}
                            rating={review.rating}
                        />
                    ))}
                </div>
               
            </div>
        </div>
    );
};

export default Home;
