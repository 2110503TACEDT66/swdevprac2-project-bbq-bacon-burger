export default async function getHotels(){
    const response = await fetch('https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/hotels/',{mode:'cors'})
    if(!response.ok){
        throw new Error("Fail to Fetch Hotel")
    }
    return await response.json()
}