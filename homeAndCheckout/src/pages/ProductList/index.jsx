import React, { useState } from "react";
import { Typography } from "@mui/material";
import productBanner from "../../assets/images/productBanner.png";
import styles from "./styles.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterComponent from "../../components/FilterComponent";
import NewDropCard from "../../components/NewDropCard"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

export default function ProductList(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [category, setCategory] = useState("Life Style");
    const [showMenu, setShowMenu] = useState(false);
    const [filter, setFilter] = useState({color: "", size: "", categories: [], gender: [], price: ""})
    const [filterDrawer, setFilterDrawer] = useState(false);

    const handleCateogry = () => {  
        setShowMenu(prev => !prev);
    }

    const handleCateogrySelection = (category) => {
        setCategory(category);
        handleCateogry()
    }

    const handleFilter = () => {
        setFilterDrawer(prev => !prev)
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setFilterDrawer(open);
      };

    return(
        <div className={styles.rootContainer}>
            <div className={styles.topBanner} style={{backgroundImage:`url(${productBanner})`}}>
                <div className={styles.bannerContent}>
                    <Typography className={styles.label}>Limited time only</Typography>
                    <Typography className={styles.header}>Get 30% off</Typography>
                    <Typography className={styles.label}>Sneakers made with your comfort in mind so you can put all of your focus into your next session.</Typography>
                </div>
            </div>

            <div className={styles.filterBtnContainer}>
                {isMobile && <button onClick={handleCateogry} className={styles.categoryBtn}>{category} <KeyboardArrowDownIcon /></button>}
                {isMobile && <button onClick={handleFilter} className={styles.categoryBtn}>Filter <FilterListIcon /></button>}
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>                    
                {showMenu && isMobile &&
                    <div className={styles.categoryList}>
                        <div style={{width:"100%", textAlign:"center"}}>
                            {["Life Style", "Sports", "Casuals", "Trending"].map((item) => (
                                <Typography onClick={() => handleCateogrySelection(item)} className={styles.menuText} style={(category === item) ? {fontWeight: "800"}: {}}> {item}<hr /></Typography>                                
                            ))}
                        </div>
                    </div>
                }
            </div>

            <div className={styles.catergoryContainer}>
              
                <Typography className={styles.category}>Life Style Shoes <label className={styles.label}>122 item</label></Typography>
                <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                    {!isMobile && <button onClick={handleCateogry} className={styles.categoryBtn}>{category} <KeyboardArrowDownIcon /></button>}
                    
                    {showMenu && !isMobile &&
                        <div className={styles.categoryList}>
                            <div style={{width:"100%", textAlign:"center"}}>
                                {["Life Style", "Sports", "Casuals", "Trending"].map((item) => (
                                    <Typography onClick={() => handleCateogrySelection(item)} className={styles.menuText} style={(category === item) ? {fontWeight: "800"}: {}}> {item}<hr /></Typography>                                
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>

            <div className={styles.filterContainer}>
                <div className={styles.filter}>
                   {!isMobile && <FilterComponent filter={filter} setFilter={setFilter}/>}
                </div>
                <div className={styles.productContainer}>
                    <NewDropCard />
                </div>
            </div>
            
            {isMobile &&
                <Drawer
                    open={filterDrawer}
                    onClose={toggleDrawer()}
                >  
                <div style={{padding:"20px"}}>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <Typography style={{fontWeight:"600", fontFamily:"RubikSemiBold", fontSize:"16px"}}>Filter</Typography>
                        <CloseIcon onClick={handleFilter}/>
                    </div>
                    <FilterComponent filter={filter} setFilter={setFilter}/>
                </div>
                </Drawer>
             }
        </div>
    )
}