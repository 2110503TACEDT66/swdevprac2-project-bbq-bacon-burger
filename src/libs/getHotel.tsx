export default async function getHotel(id: string) {
    const response = await fetch(`https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/hotels/${id}`)
    if (!response.ok) {
        throw new Error("Failed to fetch Hotel")
    }
    return await response.json();
}