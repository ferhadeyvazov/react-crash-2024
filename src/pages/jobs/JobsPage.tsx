import React from 'react'
import Layout from '../../layouts'
import JobListings from '../../components/joblistings/JobListings';

const JobsPage: React.FC = () => {
    
  return (
    <Layout>
      <section className='bg-blue-50 px-4 py-6'>
        <JobListings />
      </section>
    </Layout>
  )
}

export default JobsPage