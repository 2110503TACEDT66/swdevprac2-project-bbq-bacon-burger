'use client'

import Image from "next/image"
import getBookings from "@/libs/getBookings"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route";
import { BookingItem } from "../../../interface";
import userDeleteBooking from "@/libs/userDeleteBooking";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function mybooking() {
    const session = useSession();
    // console.log(session);
    if (!session) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div>
                    <h1 className="text-3xl text-center">You are not logged in</h1>
                    <p className="text-center">Please log in to view your bookings.</p>
                </div>
            </div>
        );
    }

    const [bookings, setBookings] = useState();
    const [deleteBooking, setDeleteBooking] = useState<string | null>(null);

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
    }, [deleteBooking])

    useEffect(() => {
        const fetchDeleteBooking = async () => {
            try {
                const result = await userDeleteBooking(session.data.user.token, deleteBooking);
                setDeleteBooking(result);
            } catch (error) {
                console.error(error);
            }
        }
        if (deleteBooking) {
            fetchDeleteBooking();
        }
    }, [deleteBooking])

    return (
        <div>
            <div className="flex justify-center items-center text-3xl pt-10">
                My Booking
                <Image
                    src="/img/hotel-logo.png"
                    alt="hotel-logo"
                    width={40}
                    height={40}
                    className="ml-2"
                />
            </div>

            <div className="flex flex-row pl-20 pr-20 pt-10 h-auto bg-paper justify-center items-center">
                <div className="w-[80%] h-full">
                    {bookings?.count > 0 ? (
                        bookings?.data.map((booking: BookingItem) => (
                            <div className="flex flex-row border-solid border-2 border-gray-400 rounded-md mb-3 bg-white">

                                <Image
                                    src={`/img/${booking.hotel.file}`}
                                    alt={booking.hotel.name}
                                    width={200}
                                    height={200}
                                    className="rounded-sm"
                                />
                                <div className="ml-2 text-black text-">
                                    <h1 className="text-xl">{booking.hotel.name}</h1>
                                    <h3 className="text-sm">
                                        Date: {booking.checkInDate} {`->`} {booking.checkOutDate}
                                    </h3>
                                </div>
                                <div className="ml-auto">
                                    <button className="bg-red-500 text-white rounded-lg p-1 m-1 hover:bg-red-700 text-white rounded-lg transition duration-300 transform hover:scale-105" onClick={() => {setDeleteBooking(booking._id); }}>
                                        Cancel Booking
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center h-auto bg-paper m-10">
                            No Booking D:
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}