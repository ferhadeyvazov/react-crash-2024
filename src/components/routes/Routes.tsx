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
import JobPage, {jobLoader} from "../../pages/jobs/JobPage";
import AddJobPage from '../../pages/addJob/AddJobPage';

import { IJobForm } from '../../pages/addJob/model';

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

function addJob(newJob: IJobForm): void {
    console.log(newJob);
}

const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="jobs" element={<JobsPage />} />
            <Route path='add-job' element={<AddJobPage addJobSubmit={addJob} />} />
                <Route path="jobs/:id" element={<JobPage />} loader={ jobLoader } />
                <Route path="*" element={<NotFound />} />
            </Route>
    )
);

const Routers:React.FC = ()=>{
    return <RouterProvider router={router}/>;
}


export default Routers;