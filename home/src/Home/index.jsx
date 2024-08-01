import { Grid, Typography, useTheme } from "@mui/material";
import styles from "./styles.module.scss";
import backgroundImage from "../assets/images/homeBanner.png"
import previewBgOne from "../assets/images/previewOne.svg"
import previewBgTwo from "../assets/images/previewTwo.svg"
import NewDropCard from "../components/NewDropCard";

const Home = () => {
    const theme = useTheme();

    const typoStyles = {
        color: "var(--Dark-Gray, #232321)",
        fontFamily: "RubikSemiBold",
        fontSize: "223.5px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        textTransform: "uppercase",
        textAlign: "center",
        [theme.breakpoints.down('md')]: {
            fontSize: "60px",
        },
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
        </div>
    );
};

export default Home;
