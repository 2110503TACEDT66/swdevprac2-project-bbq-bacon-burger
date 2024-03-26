
export default async function getHotels(){
    await new Promise((resolve)=> setTimeout(resolve,1000))

    const response = await fetch('https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/hotels/',{mode:'cors'})
    if(!response.ok){
        throw new Error("Fail to Fetch Hotel")
    }
    return await response.json()
}