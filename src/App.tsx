import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import HomeCards from './components/home_cards/HomeCards'
import JobListings from './components/joblistings/JobListings'
import ViewAllJobs from './components/view_all_jobs/ViewAllJobs'

const App: React.FC = () => {


  return (
    <>
      <Navbar/>
      <Hero title={'Test title'} subtitle={"Test subtitle"}/>
      <HomeCards/>
      <JobListings />
      <ViewAllJobs/>

    </>
  )
}

export default App