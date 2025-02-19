import { Box, CircularProgress } from "@mui/material";
import React from "react";


const Loader = () => {
    return(
        <Box sx={{ display: 'flex', height:"100vh", justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
            <CircularProgress sx={{color:"#000"}}/>
        </Box>
    )
}

export default Loader;