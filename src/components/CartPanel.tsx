'use client'

import { removeFromCart } from "@/app/redux/features/cartSlice";
import { AppDispatch, useAppSelector } from "@/app/redux/store"
import getBookings from "@/libs/getBookings";
import userCreateBooking from "@/libs/userCreateBooking";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function CartPanel() {
    const cartItems = useAppSelector((state) => state.cartSlice.CartBookingItems);
    const dispatch = useDispatch<AppDispatch>()
    const session = useSession()

    let totalPrice = 0
    cartItems.map((item) => {
        totalPrice += item.price
    })

    const [bookings, setBookings] = useState();
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const result = await getBookings(session.data.user.token);
                setBookings(result);

            } catch (error) {
                console.error(error);
            }
        }
        fetchBookings();

    }, [cartItems])

    const createBooking = async () => {
        for (const item of cartItems) {
            // if (cartItems.length > 3) {

            //     alert("You can only book 3 rooms at a time");
            //     return; // Exit the function early if the booking limit is exceeded
            // }
            try {
                await userCreateBooking(session?.data?.user.token, item.hid, session?.data?.user._id, item.checkInDate, item.checkOutDate, item.picture);
            } catch (error) {
                
                alert("You can only book 3 rooms at a time");
                return; // Exit the function early if the booking creation fails
            }

            dispatch(removeFromCart(item._id));
            await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for 1000 milliseconds before processing the next item
        }
    };

    return (
        cartItems.length > 0 ?
            <div className="flex flex-row w-full justify-center">
                <div className="w-[55%]">
                    {
                        cartItems.map((item) => {
                            return (
                                <div className="flex flex-row border-solid border-2 border-gray-400 rounded-md mb-3 bg-white">
                                    <Image src={`/img/${item.picture}`} alt={item.name} width={200} height={200} className="rounded-sm" />
                                    <div className="ml-2 text-black text-">
                                        <h1 className="text-xl">{item.name}</h1>
                                        <h3 className="text-sm">Date: {item.checkInDate} {`->`} {item.checkOutDate}</h3>
                                        <h3 className="text-2xl pt-3 text-orange-500">{item.price}.- </h3>
                                    </div>
                                    <div className="ml-auto">
                                        <button className="bg-red-500 text-white rounded-lg p-1 m-1" onClick={() => dispatch(removeFromCart(item._id))}>Cancel</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-[35%]">

                    <div className="h-fit text-black ml-[10%] border-solid border-2 border-gray-400 rounded-md bg-white">
                        <div className="p-3">
                            <div className="text-xl font-bold text-center mt-3">Your Cart</div>

                            {
                                cartItems.map((item) => {
                                    return (
                                        <div>
                                            <h3 className="text-lg">{item.name}: ฿ {item.price}.-</h3>
                                        </div>
                                    )
                                })
                            }
                            <h3 className="mt-3">Price: ฿ {totalPrice}.-</h3>
                            <h3 className="mt-2">Service Fee: ฿ {(totalPrice * 0.3).toFixed(2)}.-</h3>
                            <h3 className="mt-2">Total Price: ฿ {(totalPrice * 1.3).toFixed(2)}.-</h3>
                            <div className="text-lg mt-4 font-bold">
                                Choose Your Payment Method
                                <div className="flex flex-row item-center">
                                    <Image src="/img/bitcoin.png" alt="bitcoin" width={40} height={40} className="mr-2 transition ease-in-out hover:scale-110" />
                                    <Image src="/img/visa.png" alt="visa" width={40} height={40} className="mr-2 transition ease-in-out hover:scale-110" />
                                    <Image src="/img/mastercard.png" alt="mastercard" width={40} height={40} className="mr-2 transition ease-in-out hover:scale-110" />
                                    <Image src="/img/paypal.png" alt="paypal" width={40} height={40} className="mr-2 transition ease-in-out hover:scale-110" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <button className="transition ease-in-out delay-100 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 text-white rounded-lg p-1 m-1" onClick={() => createBooking()}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : <div className="flex flex-row w-full justify-center"><div className="text-center flex flex-row justify-center">No item in cart</div></div>
    )
}
