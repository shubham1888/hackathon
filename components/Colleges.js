import React from 'react'
import Separator from './Separator'

const Colleges = () => {
  return (
    <div className='h-[100vh] bg-gray-200 w-1/5 rounded-lg'>
        <p className='text-2xl text-center py-4 text-blue-600'>Popular Colleges</p>
        <Separator />
        <div className='text-xl font-semibold flex flex-col justify-start items-start gap-6 px-8 py-4'>
            <div>Kmc Bagbazar</div>
            <div>Kmc Lalitpur</div>
            <div>St. xavier</div>
            <div>CCRC</div>
            <div>Trinity</div>
        </div>
    </div>
  )
}

export default Colleges