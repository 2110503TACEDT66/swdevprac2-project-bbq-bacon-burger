'use client'
import PostReview from "@/libs/postReview";
import { Rating } from "@mui/material"
import { useRef, useState } from "react"

export default function YourReview() {
    const text = useRef("");
    const [rating, setRating] = useState<number|null>(0);
    

    return (
        <div className="mx-auto mt-1 mb-5 h-[auto] p-5 w-[95%] border border-solid border-slate-500 rounded-2xl">
            <Rating value={rating} onChange={(e,v)=>{setRating(v)}}></Rating>
            <button className="float-right w-[100px] h-[40px] text-md text-white font-sans font-semibold bg-orange-500 hover:bg-slate-800 hover:text-orange-500 rounded-md"
            onClick={()=>{
               

            }}>Post Review</button>
            <textarea className="h-[100px] w-full px-5 py-2 mt-2" onChange={(e)=>{text.current = e.target.value}}></textarea>
        </div>

    )
    
}