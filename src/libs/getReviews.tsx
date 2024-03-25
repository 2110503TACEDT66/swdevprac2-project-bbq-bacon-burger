export default async function getReviewsByHotel(hotel:string, token:string) {
    const response = await fetch(`http://localhost:5000/api/v1/hotels/${hotel}/reviews`, {
        method: "GET",
        mode: "cors",
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
    if (!response.ok) {
        throw new Error("Failed to fetch reviews")
    }
    return await response.json();

}