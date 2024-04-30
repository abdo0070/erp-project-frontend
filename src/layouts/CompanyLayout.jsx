import React from 'react'
import { Outlet } from 'react-router-dom'
import GuestHeader from "../components/guest/GuestHeader";

const CompanyLayout = () => {
  return (
    <>
      <div className="bg-soft-gray">
        <GuestHeader />
        <div className="min-h-screen w-10/12 m-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default CompanyLayout