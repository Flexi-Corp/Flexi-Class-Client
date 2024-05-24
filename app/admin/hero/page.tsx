'use client'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import EditHero from "../../components/Admin/Customization/EditHero";

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Flexi Class- Admin"
          description="Flexi Class is a platform for learners to learn and get help from leading tech instructors"
          keywords="Programming,MERN,Redux,Machine Learning, security, linux, cloud computing, cloud administration, cloud security,cyber security"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
           <EditHero />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page