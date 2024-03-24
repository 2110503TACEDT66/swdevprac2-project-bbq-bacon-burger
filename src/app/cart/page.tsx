'use client'

import Image from "next/image"
import CartItem from "../../components/CartItem"
export default function Cart({ hotelName, imgSrc }: { hotelName: string, imgSrc: string }) {
    const session = true
    return (
        <div>
            <div className="flex justify-center items-center text-3xl pt-10">
                <Image src="/img/shopping-cart.png" alt="shopping-cart" width={40} height={40} className="mr-2" />
                Your Cart
            </div>

             {  session == true ?
                <div className="flex flex-row pl-20 pr-20 pt-10 h-auto min-h-lvh bg-paper min">
                    <div className="w-[60%] h-full">
                        <CartItem hotelName="Reo Hotel 200Bth" imgSrc="/img/banner1.png" price={200} buttonName="Remove"/>
                        <CartItem hotelName="Reo Hotel 300Bitcoin" imgSrc="/img/banner1.png" price={2300} buttonName="Remove"/>
                        <CartItem hotelName="Reo Hotel 300Bitcoin" imgSrc="/img/banner1.png" price={2300} buttonName="Remove"/>
                        <CartItem hotelName="Reo Hotel 300Bitcoin" imgSrc="/img/banner1.png" price={2300} buttonName="Remove"/>
                        <CartItem hotelName="Reo Hotel 300Bitcoin" imgSrc="/img/banner1.png" price={2300} buttonName="Remove"/>
                        <CartItem hotelName="Reo Hotel 300Bitcoin" imgSrc="/img/banner1.png" price={2300} buttonName="Remove"/>
                    </div>
                    <div className="w-[40%] h-fit text-black ml-[10%] border-solid border-2 border-gray-400 rounded-md bg-white">
                        <div className="p-3">
                            <div className="text-lg font-bold">Your Cart</div>
                            <h3>Price 2</h3>
                            <h3>Price 3</h3>
                            <h3>Price 1</h3>
                            <h3>Tax: </h3>
                            <h3>Total: 1230123</h3>
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
                                <button className="transition ease-in-out delay-100 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 text-white rounded-lg p-1 m-1">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div> : <div className="flex justify-center h-auto bg-paper m-10">No item in cart</div>
            }
        </div>
    )
}