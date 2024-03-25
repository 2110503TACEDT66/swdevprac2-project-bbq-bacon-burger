
import Image from "next/image"
import CartItem from "../../components/CartItem"
import getBookings from "@/libs/getBookings"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function mybooking() {
    const session = await getServerSession(authOptions);

    if (session) {
        const bookings = await getBookings(session.user.token);
        // Rest of the code using 'bookings'
        console.log(bookings);
    }
    return (
        <div>
            <div className="flex justify-center items-center text-3xl pt-10">
                My Booking
                <Image src="/img/hotel-logo.png" alt="hotel-logo" width={40} height={40} className="ml-2" />
            </div>

             {  session ?
                <div className="flex flex-row pl-20 pr-20 pt-10 h-auto bg-paper justify-center items-center">
                    <div className="w-[80%] h-full">
                        
                        
                    </div>
                    
                </div> : <div className="flex justify-center h-auto bg-paper m-10">No Booking D:</div>
            }
        </div>
    )
}