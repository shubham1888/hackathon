import React from 'react'
import Questions from './Questions'

const Main = () => {
  return (
    <div className='w-full min-h-screen bg-[#EBF2F7] py-10 px-4'>
        <div className='flex justify-center items-center h-10 w-full'>
            <input type='text' className='bg-blue-300 rounded-lg h-10 w-1/5 px-4 py-2 outline-none' placeholder='Have any doubt ?' />
        </div>
        <div className='flex flex-col w-full items-center py-10'>
            <Questions />
        </div>
    </div>
  )
}

export default Main