//temporaly mybooking page
'use client'

import Image from "next/image"
import CartItem from "../../components/CartItem"
export default function Cart({ hotelName, imgSrc }: { hotelName: string, imgSrc: string }) {
    // const session = true
    // return (
    //     <div>
    //         <div className="flex justify-center items-center text-3xl pt-10">
    //             My Booking
    //             <Image src="/img/hotel-logo.png" alt="hotel-logo" width={40} height={40} className="ml-2" />
    //         </div>

    //          {  session == true ?
    //             <div className="flex flex-row pl-20 pr-20 pt-10 h-auto bg-paper justify-center items-center">
    //                 <div className="w-[80%] h-full">
    //                     <CartItem hotelName="Reo Hotel 200Bth" imgSrc="/img/banner1.png" price={200} buttonName="Cancle"/>
    //                     <CartItem hotelName="Reo Hotel 300Bitcoin" imgSrc="/img/banner1.png" price={2300} buttonName="Cancle"/>
    //                 </div>
                    
    //             </div> : <div className="flex justify-center h-auto bg-paper m-10">No Booking D:</div>
    //         }
    //     </div>
    // )
}