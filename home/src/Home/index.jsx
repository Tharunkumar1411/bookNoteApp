import {Typography, useTheme } from "@mui/material";
import styles from "./styles.module.scss";
import "react-multi-carousel/lib/styles.css";
import backgroundImage from "../assets/images/homeBanner.png"
import previewBgOne from "../assets/images/previewOne.svg"
import previewBgTwo from "../assets/images/previewTwo.svg"
import NewDropCard from "../components/NewDropCard";
import { useRef } from "react";
import ReviewCard from "../components/ReviewCard";
import reviewPersonOne from "../assets/images/reviewPersonOne.svg";
import reviewOne from "../assets/images/reviewOne.svg"
import reviewPersonTwo from "../assets/images/reviewPersonTwo.svg";
import reviewTwo from "../assets/images/reviewTwo.svg"
import reviewPersonThree from "../assets/images/reviewPersonThree.svg";
import reviewThree from "../assets/images/reviewThree.svg";

const reviewData = [
    {
      title: "Good Quality",
      subText: "I highly recommend shopping from kicks",
      personImg: reviewPersonOne,
      reviewImg: reviewOne,
      rating: 5
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
    {
      title: "Awesome Experience",
      subText: "The shopping experience was seamless",
      personImg: reviewPersonOne,
      reviewImg: reviewOne,
      rating: 4.8
    }
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

            <div>
                
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
