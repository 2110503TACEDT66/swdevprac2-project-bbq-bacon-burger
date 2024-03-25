'use client'

import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <button className="w-[120px] text-center my-auto font-sans text-l text-gray-500" onClick={()=>{signOut()}}>
            Sign Out
        </button>
        
    );
}