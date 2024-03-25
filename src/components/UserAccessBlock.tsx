export default function UserAccessBlock({children}: {children: React.ReactNode}) {
    return (
        <div className="w-[90%] h-[90%] bg-white border border-slate-800 rounded-3xl flex">
                <div className="w-[40%] h-auto bg-slate-500 border-2 border-slate-800 rounded-l-3xl">

                </div>

                {children}
            </div>
    )
}