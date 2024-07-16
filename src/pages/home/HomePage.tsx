import React from 'react'

import Layout from '../../layouts'
import Hero from '../../components/hero/Hero'
import HomeCards from '../../components/home_cards/HomeCards'
import JobListings from '../../components/joblistings/JobListings'
import ViewAllJobs from '../../components/view_all_jobs/ViewAllJobs'

const HomePage: React.FC = () => {    
    return (
        <Layout>
            <Hero title={'Become a React Dev'} subtitle={"Find the React job that fits your skillset"} />
            <HomeCards />
            <JobListings />
            <ViewAllJobs />
        </Layout>
    )
}

export default HomePage