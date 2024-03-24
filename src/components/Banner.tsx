import { Button } from "@mui/material"
import Image from "next/image"

export default function Banner() {
    return (
        <div className="flex flex-row p-20 h-[92vh]">
            <div className="w-[50%] p-10">
                <p className="font-semibold text-6xl text-slate-800 leading-loose">Explore your <span className="text-orange-500 bold">world</span>,</p> 
                <p className="font-semibold text-6xl text-slate-800">One <span className="text-orange-500 bold">stay</span> at a time</p>
                <Button className="w-[20%] h-[7%] my-[15%] mx-[10%] text-xl text-slate-900 font-bold bg-orange-500 hover:bg-slate-800 hover:text-orange-500 rounded-2xl" variant="contained">Book now!</Button>
            </div>

            <div className="w-[45%] h-[60%] relative">
                <Image src="/img/banner1.png" alt="bannerImage1" fill={true} priority className="block obj-cover rounded-2xl"></Image>
                <Image src="/img/banner2.jpg" alt="bannerImage2" fill={true} priority className="block obj-cover rounded-2xl"></Image>
                <Image src="/img/banner3.png" alt="bannerImage3" fill={true} priority className="block obj-cover rounded-2xl"></Image>
            </div>
            
            
        </div>
    )
}