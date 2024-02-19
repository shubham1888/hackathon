"use client"
import { Button } from '@/components/ui/button'
import React, { useRef } from 'react'
import { db, storage } from "@/firebase";
import { collection, setDoc, doc } from "firebase/firestore"
import { uploadBytes, ref } from "firebase/storage"

const AddQuestion = () => {
  const imageref = useRef(null)
  const questionref = collection(db, "question")
  const saveimage = () => {
    const file = imageref.current.files[0]
    const storageRef = ref(storage, `uploads/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded successful")
    })
  };
  const saveQuestion = async (formData) => {
    const id = Date.now().toString(36)
    if (!(imageref.current.files[0] === undefined)) {
      saveimage()
    }
    const res = await setDoc(doc(questionref, id), {
      question: formData.get("question"),
      explanation: formData.get("Explanation"),
      like: 0,
      upvote: 0,
      downvote: 0,
      id,
    })
  }
  return (
    <div className='w-full min-h-screen'>
      <p className='text-center'>
        Add Questions
      </p>
      <form className='w-2/4 h-96 mx-auto bg-gray-200 rounded-lg p-6' action={saveQuestion}>
        <div className='my-2'>
          <label htmlFor="question">Question</label>
          <input type="text" name="question" id="question" className='w-[80%] h-10 px-4 outline-none py-2 rounded-lg ml-4' />
        </div>
        <div className='my-2'>
          <label htmlFor="Explanation">Explanation</label>
          <input type="text" name="Explanation" id="Explanation" className='w-[80%] h-10 px-4 outline-none py-2 rounded-lg ml-4' />
        </div>
        <div className='my-2'>
          <label htmlFor="Explanation">Add Image Of Your Question</label>
          <input type="file" name="file" id="file" className='mx-4' ref={imageref} />
        </div>
        <div className="flex justify-center items-center w-full">
          <Button>Post</Button>
        </div>
      </form>
    </div>
  )
}

export default AddQuestion
