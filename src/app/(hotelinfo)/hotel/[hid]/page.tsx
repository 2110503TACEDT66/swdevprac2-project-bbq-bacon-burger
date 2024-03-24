import DateBooker from "@/components/DateBooker";
import ReviewBlock from "@/components/ReviewBlock";
import { Rating} from "@mui/material";
import Image from "next/image";


export default function Detailpage( {params} : {params:  {hid:string}}) {
    return (
        <main className="h-auto w-full">
            <div className="bg-white h-[500px] w-[90%] mt-5 mx-auto border border-solid border-slate-800 rounded-t-2xl flex">
                <div className="relative h-[100%] w-[35%]">
                <Image src="/img/banner1.png" alt="bannerImage1" fill={true} priority className="block obj-cover rounded-tl-2xl"></Image>
                </div>

                <div className="p-10">
                    <h1 className="my-2 font-bold text-3xl font-sans">Australian Gaylords Hotel</h1>
                    <div className="h-[20px] w-[100%] flex items-center flex-wrap ">
                        <Rating readOnly value={3.4} precision={0.1}></Rating> <span className="text-sm font-light mx-3">reviews by 10 persons</span>
                    </div>
                    <p className="m-4 font-medium text-md font-sans">information lol</p>
                </div>
                
            </div>

            <div className="bg-white h-[80px] w-[90%] mt-5 mx-auto border border-solid border-slate-800 flex  divide-x divide-solid divide-slate-800">

                <div className="leading-none mx-5 w-[35%] flex justify-center items-center">
                    <h1 className="font-semibold text-lg text-slate-800 block mx-5 ">Check In </h1>
                    <DateBooker/> 
                </div>
                <div className="leading-none mx-5 w-[35%] flex justify-center items-center">
                    <h1 className="font-semibold text-lg text-slate-800 block mx-5 ">Check Out </h1>
                    <DateBooker/> 
                </div>
                <div className="mx-5 w-[30%] flex justify-center items-center">
                    <h1 className="block font-bold text-green-800 text-4xl mx-5">฿ 30,000.00</h1>
                    <button className="block w-[40%] h-[50%] text-2xl text-white font-bold font-sans bg-orange-500 hover:bg-slate-800 hover:text-orange-500 rounded-md">Add to Cart</button>

                </div>
        
            </div>

            <div className="bg-white h-auto pb-5 w-[90%] mt-5 mx-auto border border-solid border-slate-800 rounded-b-2xl">
                <p className="text-md font-light mx-10 mt-5">Your Review</p> 
                <div className="mx-auto mt-1 mb-5 h-[auto] p-5 w-[95%] border border-solid border-slate-500 rounded-2xl">
                    <Rating></Rating>
                    <button className="float-right w-[100px] h-[40px] text-md text-white font-sans font-semibold bg-orange-500 hover:bg-slate-800 hover:text-orange-500 rounded-md">Post Review</button>
                    <textarea className="h-[100px] w-full px-5 py-2 mt-2"></textarea>
                </div>
                
                <p className="text-md font-light mx-10">Other customer reviews</p> 
                <ReviewBlock user="john" rating={5} comment={"nah I'd win"} createdAt="07-08-2111"/>
                <ReviewBlock user="roblox" rating={2} comment={"this hotel is good"} createdAt="23-02-1995"/>
                
            </div>
        </main>
    )
    
}