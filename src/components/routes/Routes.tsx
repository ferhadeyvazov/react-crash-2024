import React from 'react';
import { 
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements } from "react-router-dom";
// PAGES
import HomePage from "../../pages/home/HomePage";
import JobsPage from "../../pages/jobs/JobsPage";
import NotFound from "../../pages/NotFound/NotFound";
import JobPage from "../../pages/jobs/JobPage";

// const Routers: React.FC = () => {
//     return (
//         <>
//             <Routes>
//                 <Route path="/">
//                     <Route index element={<HomePage />} />
//                     <Route path="jobs" element={<JobsPage />} />
//                     <Route path="jobs/:id" element={<JobPage />} />
//                     <Route path="*" element={<NotFound />} />
//                 </Route>
//             </Routes>
//         </>
//     )
// }

const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="jobs" element={<JobsPage />} />
                <Route path="jobs/:id" element={<JobPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
    )
);

const Routers = ()=>{
    return <RouterProvider router={router}/>;
}


export default Routers;