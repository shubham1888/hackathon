'use client'
// import Image from "next/image"
import { BiSolidUpvote } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore"
import { useState } from "react";
import { db } from "@/firebase";

const GetData = () => {
    const [data, setdata] = useState([])
    const testRef = collection(db, "question")
    const unsubscribe = onSnapshot(testRef, (snapshot) => {
        const arr = []
        snapshot.forEach((doc) => {
            arr.push({ id: doc.id, question: doc.data().question,explanation:doc.data().explanation,like:doc.data().like,upvote:doc.data().upvote,downvote:doc.data().downvote })
        })
        setdata(arr)
    })
    setTimeout(() => {
        console.log(data)
    }, 2000);
    return (
        <div className="min-h-screen overflow-scroll my-6">
            <p className='text-3xl'>Popular Questions</p>
            <div>
                {
                    data.map((i) => {
                        return (
                            <div className="w-[40vw] h-96 rounded-lg bg-gray-300 my-6" key={i.id}>
                                {/* <Image src={"/question.jpg"} width={400} height={200} alt="question" /> */}
                                <div className="p-4">
                                    <p className="text-2xl font-semibold my-2">{i.question}</p>
                                    <p>{i.explanation}</p>
                                </div>
                                <div className="flex gap-4 text-2xl p-4 py-4">
                                    <div className="flex justify-center items-center gap-2">
                                        {i.upvote} <BiSolidUpvote className="text-blue-700" />
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        {i.like} <FaHeart className="text-red-500" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default GetData