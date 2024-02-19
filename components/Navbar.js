import React from 'react'
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <div className='h-16 w-full flex justify-between items-center px-4'>
            <div className='w-2/5'>Logo</div>
            <div>
                <input type='text' className='w-40 px-4 py-2 rounded-lg bg-blue-300 outline-none' placeholder='Search' />
            </div>
            <div>
                <div className='flex gap-4' >
                <Button>Login</Button>
                <Button>Signup</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar