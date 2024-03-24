
export default async function getHotels(){
    await new Promise((resolve)=> setTimeout(resolve,1000))

    const response = await fetch('http://localhost:5000/api/v1/hotels/')
    if(!response.ok){
        throw new Error("Fail to Fetch Hotel")
    }
    return await response.json()
}