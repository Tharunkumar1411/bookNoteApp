import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({token}) => {
    return !token ? (    
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    ) : <Navigate />
}

export default Layout;