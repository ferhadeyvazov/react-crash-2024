import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import JobsPage from "../../pages/jobs/JobsPage";

const Routers: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="jobs" element={<JobsPage />} />
                </Route>
            </Routes>
        </>
    )
}



export default Routers;