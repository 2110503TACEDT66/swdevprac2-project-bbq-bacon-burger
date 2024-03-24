import { Rating } from "@mui/material"

export default function ReviewBlock( {user,rating, comment} : {user:string, rating:number, comment: string}) {
    return (
        <div className="mx-auto mt-1 mb-5 p-5 h-[auto] w-[95%] border border-solid border-slate-500 rounded-2xl">
                <p className="font-semibold">{user} </p>
                <Rating value={rating} readOnly></Rating>
                <p>{comment}</p>

        </div>
    )


}