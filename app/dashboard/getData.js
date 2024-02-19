'use client'
import { collection, onSnapshot, doc } from "firebase/firestore"
import { useState } from "react";
import { db } from "@/firebase";

const GetData = () => {
    const [data, setdata] = useState([])
    const testRef = collection(db, "question")
    const unsubscribe = onSnapshot(testRef, (snapshot) => {
        const arr = []
        snapshot.forEach((doc) => {
            arr.push({ id: doc.id, question: doc.data().question,exp:doc.data().explanation })
        })
        setdata(arr)
    })
    return (
        <div className="min-h-screen overflow-scroll my-6">
            {
                data.map((i) => {
                    return (
                        <div key={i.id} onClick={() => deldoc(i.id)} className="h-12 w-full px-8 bg-slate-700 text-white rounded-lg my-2 text-center flex items-center justify-center">{i.name}</div>
                    )
                })

            }
        </div>
    )
}
export default GetData