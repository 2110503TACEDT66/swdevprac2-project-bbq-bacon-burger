'use client'

import { removeFromCart } from "@/app/redux/features/cartSlice";
import { AppDispatch, useAppSelector } from "@/app/redux/store"
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function CartPanel() {
    const cardItems = useAppSelector((state) => state.cartSlice.CartBookingItems);
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className="w-[60%] h-full">
            {
                cardItems.map((item) => {
                    return (
                        <div className="flex flex-row border-solid border-2 border-gray-400 rounded-md mb-3 bg-white">
                            <Image src={`/img/${item.picture}`} alt={item.name} width={200} height={200} className="rounded-sm" />
                            <div className="ml-2 text-black text-">
                                <h1 className="text-xl">{item.name}</h1>
                                <h3 className="text-sm">Date: {item.checkInDate} {`->`} {item.checkOutDate}</h3>
                                <h3 className="text-2xl pt-3 text-orange-500">{item.price}.- </h3>
                            </div>
                            <div className="ml-auto">
                                <button className="bg-red-500 text-white rounded-lg p-1 m-1" onClick={()=>dispatch(removeFromCart(item.hid))}>Cancle</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
