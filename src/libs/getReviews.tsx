export default async function getReviewsByHotel(hotel:string) {
    const response = await fetch(`https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/hotels/${hotel}/reviews`, {
        method: "GET",
        mode: "cors",

    })
    if (!response.ok) {
        throw new Error("Failed to fetch reviews")
    }
    return await response.json();

}