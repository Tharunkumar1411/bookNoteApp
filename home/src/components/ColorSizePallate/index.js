import React from "react";
import { colors, Radio, RadioGroup } from "@mui/material";
import styles from "./styles.module.scss"

const ColorSizePallate = ({data, selectedPallate}) => {
    return(
        <div className={styles.rootContainer}>
            <div className={styles.colorContainer}>
                <p className={styles.pallateHeader}>Color</p>
                <div className={styles.pallateContainer}>
                    {data?.color?.map((item) => (
                        <div style={item === selectedPallate.color ? {
                            border:`2px solid ${item}`,
                            padding: '5px',
                            borderRadius: "25px",
                        } : {alignSelf: "center"}}>
                            <div className={styles.pallate} style={{backgroundColor: item, }}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sizeContainer}>
                <p className={styles.pallateHeader}>Size</p>
                <div className={styles.pallateContainer}>
                    {data?.size?.map((item) => (
                        <div style={item === selectedPallate.size ? {
                            backgroundColor: '#000',
                            color: '#fff',
                            borderRadius: "15px"
                        } : {color: "#000", backgroundColor: "#fff", borderRadius: "16px"}}>
                            <div className={styles.sizePallate}>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ColorSizePallate;