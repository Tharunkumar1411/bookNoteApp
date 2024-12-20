import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { ROUTES } from './routes';
import Loader from '../components/Loader';
import NotFound from '../pages/NotFound';

// Lazy load the pages
const Application = React.lazy(() => import('../pages/Application'));
const ProductPage = React.lazy(() => import('../pages/Product'));
const Register = React.lazy(() => import('../pages/Register'));
const Login = React.lazy(() => import('../pages/Login'));

const AppRoutes = () => {
    const nav = useNavigate();

    // useEffect(() => {
    //     const Token = sessionStorage.getItem("Auth Token");
    //     if(!Token){
    //         nav(ROUTES.LOGIN)
    //     }
    // }, []);
    
    return (
       <Suspense fallback={<Loader />}>
        <Routes>
            <Route element={<Layout />}>
                <Route path={ROUTES.HOME} element={<Application />} />
                <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
       </Suspense>
    );
};

export default AppRoutes;
