"use client"

import Navbar1 from '@/components/Navbar1'
import { FileUpload } from '@/components/ui/file-upload'
import React from 'react'

function page() {
  return (
    <div className='text-white p-5'>
        <Navbar1/>
        <h1 className='flex text-7xl justify-center font-semibold text-blue-200 my-24'>Upload</h1>
        <FileUpload/>
    </div>
  )
}

export default page