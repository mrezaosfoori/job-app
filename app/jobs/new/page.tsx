import { Metadata } from 'next'
import React from 'react'
import NewJobForm from './NewJobForm'

export const metadata:Metadata={
   title:"ثبت آگهی"
}

const page = () => {
  return (
   <NewJobForm/>
  )
}

export default page
