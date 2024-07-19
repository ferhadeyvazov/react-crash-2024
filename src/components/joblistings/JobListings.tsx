import React, { useState, useEffect } from 'react'
import JobListing from "./JobListing"
import { IProps, JobObject } from './models'


const JobListings: React.FC<IProps> = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                let res = await fetch('http://localhost:8000/jobs');
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

    let jobListings: JobObject[] = isHome ? jobs.slice(0, 3) : jobs;
    console.log(typeof jobListings);
    
    
    return (
        <section className='bg-blue-50 px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    {isHome ? 'Recent Jobs' : "Browse Jobs"}
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        jobListings.map((job) => (
                            <JobListing key={Number(job.id)} job={job} />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default JobListings