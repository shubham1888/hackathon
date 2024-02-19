import Image from "next/image"
import { BiSolidUpvote } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const Questions = () => {
    return (
        <div>
            <p className='text-3xl'>Popular Questions</p>
            <div>
                <div className="w-[40vw] h-96 rounded-lg bg-gray-300 my-6">
                    {/* <Image src={"/question.jpg"} width={400} height={200} alt="question" /> */}
                    <div className="p-4">
                        <p className="text-2xl font-semibold my-2">Find the value of G?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque ab non eos numquam, excepturi eveniet mollitia dolor odit optio enim modi nihil esse in veritatis iusto, debitis similique quod.</p>
                    </div>
                    <div className="flex gap-4 text-2xl p-4 py-4">
                        <div className="flex justify-center items-center gap-2">
                            400 <BiSolidUpvote className="text-blue-700" />
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            200 <FaHeart className="text-red-500" />
                        </div>
                    </div>
                </div>
                <div className="w-[40vw] h-96 rounded-lg bg-gray-300 my-6">
                    {/* <Image src={"/question.jpg"} width={400} height={200} alt="question" /> */}
                    <div className="p-4">
                        <p className="text-2xl font-semibold my-2">Find the value of G?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque ab non eos numquam, excepturi eveniet mollitia dolor odit optio enim modi nihil esse in veritatis iusto, debitis similique quod.</p>
                    </div>
                    <div className="flex gap-4 text-2xl p-4 py-4">
                        <div className="flex justify-center items-center gap-2">
                            400 <BiSolidUpvote className="text-blue-700" />
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            200 <FaHeart className="text-red-500" />
                        </div>
                    </div>
                </div>
                <div className="w-[40vw] h-96 rounded-lg bg-gray-300 my-6">
                    {/* <Image src={"/question.jpg"} width={400} height={200} alt="question" /> */}
                    <div className="p-4">
                        <p className="text-2xl font-semibold my-2">Find the value of G?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque ab non eos numquam, excepturi eveniet mollitia dolor odit optio enim modi nihil esse in veritatis iusto, debitis similique quod.</p>
                    </div>
                    <div className="flex gap-4 text-2xl p-4 py-4">
                        <div className="flex justify-center items-center gap-2">
                            400 <BiSolidUpvote className="text-blue-700" />
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            200 <FaHeart className="text-red-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions