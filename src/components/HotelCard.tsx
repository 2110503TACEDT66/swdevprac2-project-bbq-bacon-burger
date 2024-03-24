import Image from "next/image";
import CardTemplate from "./CardTemplate";
import getHotels from "@/libs/getHotels";
import getHotel from "@/libs/getHotel";

export default async function HotelCard({hotelName,hotelAddress,hotelTel}:{hotelName:string,imgSrc:string,hotelAddress:string,hotelTel:string}){

    const randPrice = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;

    return(
        <CardTemplate contentName={hotelName}>
            <div className="w-1/3 relative rounded-t-lg">
                {/* <Image src={imgSrc} alt={hotelName} fill={true} className='object-cover rounded-t-lg'/> */}
            </div>
            <div className="block w-full">
                <div className="w-full px-[4%] pt-[2%] ">
                    {hotelName}
                </div>
                <div className="w-full px-[4%] pt-[2%] ">
                    Address: {hotelAddress}
                </div>
                <div className="w-full px-[4%] pt-[2%] ">
                    Tel. {hotelTel}
                </div>
                <div className="w-full px-[4%] pt-[2%] ">
                    Rating: 
                </div>
                <div className="w-full px-[4%] pt-[2%] text-2xl r-0 b-0">
                    ฿: {randPrice}
                </div>
            </div>
            
        </CardTemplate>
    )
}