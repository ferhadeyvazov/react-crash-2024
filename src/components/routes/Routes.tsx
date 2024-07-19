import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import JobsPage from "../../pages/jobs/JobsPage";
import NotFound from "../../pages/NotFound/NotFound";

const Routers: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="jobs" element={<JobsPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}



export default Routers;