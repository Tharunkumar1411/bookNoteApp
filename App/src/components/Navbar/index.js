import styles from "./styles.module.scss" 

const NavBar = () => {
    return(
        <div className={styles.navRootContainer}>
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </div>
    )
}

export default NavBar;