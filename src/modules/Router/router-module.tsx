import { lazy, Suspense, useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";

const Home = lazy(() => import("../Home"));

const RouterModule = () => {
    const dispatch = useDispatch()
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<LinearProgress />}><Home /></Suspense>} />
        </Routes>
    )
}

export default RouterModule;