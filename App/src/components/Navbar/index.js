import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import styles from "./styles.module.scss" 
import { Typography } from '@mui/material';
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import PersonIcon from '@mui/icons-material/Person';
import logoImg from "../../assets/images/Logo.svg"
import CartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { NavItems } from '../../utils/constants';
function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  return(
    <div>
        <div className={styles.navRootContainer}>
            <div>

                {isMobile ? 
                    (
                        <Hamburger toggled={open} size={20} toggle={setOpen} />
                    )
                : 
                    (
                        <div className={styles.navMenuItems}>
                        
                            {(NavItems.map((item, idx) => (
                                <motion.Typography
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.1 + idx / 10,
                                }}
                                key={idx}
                                >
                                    <Typography className={styles.menuOption}>{item}</Typography>
                                </motion.Typography>
                            )))}
                        </div>
                    )
                }
            </div>


            <div className={styles.logo}>
                <img src={logoImg} alt="logo" />
            </div>

            <div className={styles.navProfileItems}>
                {!isMobile && <SearchIcon />}
                <PersonIcon />
                <CartIcon />
            </div>
        </div>

        {isMobile &&
        <AnimatePresence className={styles.rootMenuContainer}>
            {open && (
                <motion.div  
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={styles.animatedContainer}
                >
                    <div className={styles.dropMenu}>
                    {(NavItems.map((item, idx) => (
                            <motion.Typography
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.1 + idx / 10,
                              }}
                              key={idx}
                            >
                                <Typography className={styles.dropOption}>{item}</Typography>
                            </motion.Typography>
                        )))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        }
    </div>
  );
}

export default NavBar