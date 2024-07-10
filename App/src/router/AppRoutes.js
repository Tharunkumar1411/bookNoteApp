import { Suspense, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Layout from "./Layout";
import { ROUTES } from "./routes";
import Loader from "../components/Loader";
import Application from "../pages/Application";
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRoutes = () => {
    const nav = useNavigate();

    useEffect(() => {
        let TOKEN = localStorage.getItem("token");

        if(!TOKEN){
            nav(`/register`);
        }else{
            nav(`/login`);
        }
    },[]);
    
    return(
       <Suspense fallback={<Loader />}>
        <Routes>
            <Route element={<Layout />}>
                <Route path={ROUTES.HOME} element={<Application />}/>
                <Route path={ROUTES.LOGIN} element={<Login />}/>
                <Route path={ROUTES.REGISTER} element={<Register />}/>
            </Route>
            {/* <Route path="*" element={<Navigate to={ROUTES.HOME} />} /> */}
        </Routes>
       </Suspense>
    )
}

export default AppRoutes;