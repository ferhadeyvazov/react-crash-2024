import React, { useState, useEffect } from 'react'
import JobListing from "./JobListing"
import { IProps } from './models'
import { IJob } from '../../utils/types'
import Spinner from '../spinner/Spinner'


const JobListings: React.FC<IProps> = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome
                ?'/api/jobs?_limit=3'
                :'/api/jobs'
            try {
                let res = await fetch(apiUrl);
                let data = await res.json();
                setJobs(data);

            } catch (error) {
                console.log('Error fetching Data:', error);

            } finally {
                setLoading(false);
            }


        }


        fetchJobs();
    }, []);

    let jobListings: IJob[] = isHome ? jobs.slice(0, 3) : jobs;
    
    return (
        <section className='bg-blue-50 px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    {isHome ? 'Recent Jobs' : "Browse Jobs"}
                </h2>

                {loading ? <Spinner loading={loading} /> : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                       {
                           jobListings.map((job) => (
                               <JobListing key={job.id} job={job} />
                           ))
                       }
                    </div>
                )}

            </div>
        </section>
    )
}

export default JobListings