import React from 'react'
import Footer from '../components/Footer'
import HeaderDashboard from '../components/HeaderDashboard'
import FindJobDashboard from '../components/FindJobDashboard'

const Dashboard = () => {
  return (
    <div className='bg-job-bg bg-repeat : bg-no-repeat bg : bg-cover h-svh'>
    <HeaderDashboard />
    <FindJobDashboard />
    <Footer />
    </div>
    )
}

export default Dashboard