import React, { useState } from "react";
import ColorSizePallate from "../ColorSizePallate";
import { useParams } from "react-router-dom";
import { Checkbox, FormControlLabel, Typography, Box, Slider } from "@mui/material";
import styles from "./styles.module.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CustomButton from "../CustomButton";

const FilterComponent = ({filter, setFilter}) => {
    const [dropDown, setDropDown] = useState({category: true, gender: true, price: true});
    const [val, setVal] = React.useState(0);
    
    const handleChange = (_, newValue) => {
      setVal(newValue);
      setFilter({...filter, price: newValue})
    };

    const dummy = {
        availableSize: [38,41,42,44,45,46],
        availableColors: ['#4A69E2', '#FFA52F', '#232321', '#234D41', '#353336'],
        availableCategories: ['Casual shoes', 'Runners', 'Hiking', 'Sneaker', 'Basketball', 'Golf', 'Outdoor'],
        gender: ['Male', 'Female'],
        price: [{
            value: 0,
            label: '',
          },
          {
            value: 10000,
            label: '',
          }
        ]
    }

    function valuetext(value) {
        return `₹ ${value}`;
    }

    const handleFilter = (type, value) => {
        switch (type) {
            case 'color':
                setFilter({...filter, color: value})
                break;
            case 'gender':
                setFilter({ ...filter, gender: [...filter.gender, value] });
                break;
            case 'size':
                setFilter({...filter, size: value})
                break;
            case 'category':
                setFilter({ ...filter, categories: [...filter.categories, value] });
                break;
            default:
                break;
        }
    }

    const handleApply = () => {
        console.log("check filter", filter)
    }

    return(
        <div className={styles.rootContainer}>
           <ColorSizePallate data={dummy} selectedItem={filter} setSelectedItem={setFilter} />

           <div className={styles.categoryContainer}>
                <div className={styles.dropMenu}>
                    <Typography className={styles.header}>CATEGORY</Typography>
                    {(dropDown?.category) ? <KeyboardArrowDownIcon fontSize="medium" onClick={() => setDropDown({...dropDown, category: false})}/> : <KeyboardArrowUpIcon fontSize="medium" onClick={() => setDropDown({...dropDown, category: true})}/>}
                </div>

                {dropDown.category && 
                    <div className={styles.category}>
                        {dummy?.availableCategories.map((item, index) => (
                            <FormControlLabel key={index} value={item} onChange={() => handleFilter('category', item)} control={<Checkbox />} label={item} />
                        ))}
                    </div>
                }
           </div>

           <div>
                <div className={styles.dropMenu}>
                    <Typography className={styles.header}>GENDER</Typography>
                    {(dropDown?.gender) ? <KeyboardArrowDownIcon fontSize="medium" onClick={() => setDropDown({...dropDown, gender: false})}/> : <KeyboardArrowUpIcon fontSize="medium" onClick={() => setDropDown({...dropDown, gender: true})}/>}
                </div>

                {dropDown.gender && 
                    <div className={styles.category}>
                        {dummy?.gender.map((item, index) => (
                            <FormControlLabel onChange={() => handleFilter('gender', item)} key={index} value={item} control={<Checkbox />} label={item} />
                        ))}
                    </div>
                }
           </div>

           <div>
                <div className={styles.dropMenu}>
                    <Typography className={styles.header}>PRICE</Typography>
                    {(dropDown?.price) ? <KeyboardArrowDownIcon fontSize="medium" onClick={() => setDropDown({...dropDown, price: false})}/> : <KeyboardArrowUpIcon fontSize="medium" onClick={() => setDropDown({...dropDown, price: true})}/>}
                </div>

                {dropDown.price &&
                <Box>
                   <Slider
                        marks={dummy.price}
                        step={10}
                        value={val}
                        valueLabelDisplay="auto"
                        min={0}
                        max={10000}
                        onChange={handleChange}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography
                            variant="body2"
                            onClick={() => setVal(0)}
                            sx={{ cursor: 'pointer' }}
                        >
                        {valuetext(0)}
                        </Typography>
                        <Typography
                            variant="body2"
                            onClick={() => setVal(10000)}
                            sx={{ cursor: 'pointer' }}
                        >
                            {valuetext(10000)}
                        </Typography>
                    </Box>
                </Box>
                }
           </div>

           <div className={styles.filterBtn}>
                <CustomButton children="RESET"  sx={{backgroundColor:"#fff", color: "#000", width:"100%", marginTop:"15px"}}/>
                <CustomButton onClick={handleApply} children="APPLY"  sx={{backgroundColor:"#000", color: "#fff", width:"100%", marginTop:"15px"}}/>
           </div>
        </div>
    )
}

export default FilterComponent;