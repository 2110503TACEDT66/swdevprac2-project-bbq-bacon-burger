import Link from "next/link";

export default function signInPage() {
    return (
        <main className="h-[83vh] flex justify-center items-center">
            <div className="w-[90%] h-[90%] bg-white border border-slate-800 rounded-3xl flex">
                <div className="w-[40%] h-auto bg-slate-500 border-2 border-slate-800 rounded-l-3xl">

                </div>

                <div className="mt-[6%] mx-[5%] h-auto w-[50%] flex flex-col">
                    <h1 className="text-orange-500 font-sans font-black text-8xl mb-10">Signing in...</h1>
                    <input className="h-12 w-[80%] mt-10 mb-8 border border-slate-500 p-2 font-sans" placeholder="Email"></input>
                    <input className="h-12 w-[80%] mb-10 border border-slate-500 p-2 font-sans" placeholder="Password" type="password"></input>
                    
                    <div className="w-[80%] h-auto">
                    <button className="w-[45%] h-[100%] my-5 mx-[5%] text-xl text-slate-900 font-medium font-sans bg-orange-500 hover:bg-slate-800 hover:text-orange-400 rounded-2xl">Sign In</button>
                    <span className="whitespace-pre text-lg">Don't have an account? 
                    
                    <Link className="font-bold" href={"/api/auth/signup"}> create one</Link></span>
                    </div>
                </div>
            </div>
        </main>
    )
}