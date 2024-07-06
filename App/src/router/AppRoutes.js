import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout";
import { ROUTES } from "./routes";
import Loader from "../components/Loader";
import Application from "../pages/Application";

const AppRoutes = () => {
    return(
       <Suspense fallback={<Loader />}>
        <Routes>
            <Route element={<Layout />}>
                <Route path={ROUTES.HOME} element={<Application />}/>

            </Route>
            {/* <Route path="*" element={<Navigate to={ROUTES.HOME} />} /> */}
        </Routes>
       </Suspense>
    )
}

export default AppRoutes;