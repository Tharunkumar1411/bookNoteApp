import React, { useEffect } from "react";
import styles from "./styles.module.scss"

const ColorSizePallate = ({data, setSelectedItem, selectedItem}) => {        
    useEffect(() => {
        setSelectedItem({...selectedItem, color:data?.availableColors?.[0], size: data?.availableSize?.[0] })
    },[]);

    return(
        <div className={styles.rootContainer}>
            <div className={styles.colorContainer}>
                <p className={styles.pallateHeader}>COLOR</p>
                <div className={styles.pallateContainer}>
                    {data?.availableColors?.map((item) => (
                        <div onClick={() => setSelectedItem({...selectedItem, color: item})} style={(selectedItem.color === item) ? {
                            border:`2px solid ${item}`,
                            padding: '5px',
                            borderRadius: "25px",
                            outline:"none"
                        }: {alignSelf: "center", outline:"none"}}>
                            <div className={styles.pallate} style={{backgroundColor: item, }}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sizeContainer}>
                <p className={styles.pallateHeader}>SIZE</p>
                <div className={styles.pallateContainer}>
                    {data?.availableSize?.map((item) => (
                        <div onClick={() => setSelectedItem({...selectedItem, size: item})} style={item === selectedItem.size ? {
                            backgroundColor: '#000',
                            color: '#fff',
                            borderRadius: "15px",
                        } : {color: "#000", backgroundColor: "#fff", borderRadius: "16px", cursor:"pointer"}}>
                            <div className={styles.sizePallate}>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ColorSizePallate;