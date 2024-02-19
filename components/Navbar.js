import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className='h-16 w-full flex justify-between items-center px-4 top-0 left-0 right-0 sticky'>
            <div className='w-2/5'>
                <Image src={"/logo.png"} height={100} width={100} alt="logo" />
            </div>
            <div className="font-bold flex items-center gap-4">
                <Link href={"/"}>Home</Link>
                <Link href={"dashboard"}>Dashboard</Link>
            </div>
            <div>
                <input type='text' className='w-40 px-4 py-2 rounded-lg bg-blue-500 bg-opacity-20 outline-none' placeholder='Search' />
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