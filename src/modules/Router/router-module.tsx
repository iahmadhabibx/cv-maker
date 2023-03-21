import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LinearProgress } from "@mui/material";

const Home = lazy(() => import("../Home"));
const Templates = lazy(() => import("../Templates"));

const RouterModule = () => {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<LinearProgress />}><Home /></Suspense>} />
            <Route path="templates" element={<Suspense fallback={<LinearProgress />}><Templates /></Suspense>} />
        </Routes>
    )
}

export default RouterModule;