'use client'
import { useRef, useState } from "react"
import { use } from "react";
import OTPTextfield from "./OTPTextfield";
import sentOTP from "@/libs/sentOTP";
export default function Register() {
    const firstname = useRef("");
    const lastname = useRef("");
    const email = useRef("");
    const tel = useRef("");
    const password = useRef("");
    const confirmpassword = useRef("");

    const [errMsg, setErrMsg] = useState(false);


    const [showOTP, setShowOTP] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password.current !== confirmpassword.current) {
            setErrMsg(true);
            return;
        }
        setErrMsg(false);
        alert(email.current)
        sentOTP(email.current);
        setShowOTP(true);

    }

    return (
        <>
        {
            !showOTP ? 
        <form className="mt-[2%] mx-[5%] h-auto w-[50%] flex flex-col" onSubmit={onSubmit}>
            <label className="text-orange-500 font-sans font-black text-8xl mb-8">Create your account</label>

            <div className="h-12 w-[80%] mb-6 border border-slate-500 font-sans divide-x divide-slate-500">
                <input required placeholder="First Name" type="text" className="h-[100%] w-[50%] p-2"
                onChange={(e)=>{firstname.current = e.target.value}}/>
                <input required placeholder="Last Name" type="text" className="h-full w-[50%] p-2"
                onChange={(e)=>{lastname.current = e.target.value}}/>
            </div>

            <input required className=" border border-slate-500 mb-6 p-2 font-sans w-[80%] h-12" placeholder="Tel" type="text"
            onChange={(e)=>{tel.current = e.target.value}}/>
            <input required className=" border border-slate-500 mb-6 p-2 font-sans w-[80%] h-12" placeholder="Email" type="text"
            onChange={(e)=>{email.current = e.target.value}}/>
            
            <div className="h-12 w-[80%] mb-10 border border-slate-500 font-sans divide-x divide-slate-500">
                <input required placeholder="Password" type="password" className="h-[100%] w-[50%] p-2"
                onChange={(e)=>{password.current = e.target.value}}/>
                <input required placeholder="Confirm Password" type="password" className="h-full w-[50%] p-2"
                onChange={(e)=>{confirmpassword.current = e.target.value}}/>
            </div>

            <div className="w-[80%] h-auto flex items-center">
                
            <button type="submit" className="w-[45%] h-[100%] my-5 mx-[5%] text-xl text-slate-900 font-bold font-sans bg-orange-500 hover:bg-slate-800 hover:text-orange-400 rounded-2xl"
            >Sign Up</button>
            
            {
                errMsg && <p className="text-red-700 text-sm mt-5 mx-5">the password doesn't not match.</p> 
            }
            
            </div>
            
        </form> : 

        <div className="mt-[4%] mx-[5%] h-auto w-[50%] flex flex-col">
            <label className="text-orange-500 font-sans font-black text-8xl">Almost there!</label>
            <label className="text-slate-700 font-sans text-lg font-semibold m-2">We have sent you the OTP at your email {email.current}. please confirm it below</label>
            <OTPTextfield firstname={firstname.current} lastname={lastname.current} tel={tel.current} password={password.current} email={email.current}/>

        </div>

        }
        </>
    )
   
}