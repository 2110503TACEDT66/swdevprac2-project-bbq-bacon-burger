'use client'

import Image from "next/image"
import CardItem from "../../components/CartItem"
export default function Cart({ hotelName, imgSrc }: { hotelName: string, imgSrc: string }) {
    return (
        <div className="flex flex-row p-20 h-[92vh] bg-paper">
            <div className="w-[60%] h-full">
                <CardItem hotelName="Reo Hotel 200Bth" imgSrc="/img/banner1.png" price={200} />
                <CardItem hotelName="Reo Hotel 300Bitcoin" imgSrc="/img/banner1.png" price={2300} />
                <CardItem hotelName="Reo Hotel 2 no student" imgSrc="/img/banner1.png" price={212300} />
            </div>
            <div className="w-[40%] h-fit text-black ml-[10%] border-solid border-2 border-gray-400 rounded-md bg-white">
                <div className="p-3">
                        
                    <h3>Price 2</h3>
                    <h3>Price 3</h3>
                    <h3>Price 1</h3>
                    <h3>Tax: </h3>
                    <h3>Total: 1230123</h3>
                    <div className="text-lg mt-4">
                        Choose Your Payment Method
                        <div className="flex flex-row item-center">
                            <Image src="/img/bitcoin.png" alt="bitcoin" width={40} height={40} className="mr-2" />
                            <Image src="/img/visa.png" alt="visa" width={40} height={40} className="mr-2" />
                            <Image src="/img/mastercard.png" alt="mastercard" width={40} height={40}  className="mr-2"/>
                            <Image src="/img/paypal.png" alt="paypal" width={40} height={40} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <button className="bg-yellow-600 text-white rounded-lg p-1 m-1">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}