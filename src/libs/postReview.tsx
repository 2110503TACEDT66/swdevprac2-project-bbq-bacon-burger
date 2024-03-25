export default async function PostReview(hotel:string, token:string) {
    const response = await fetch(`http://localhost:5000/api/v1/hotels/${hotel}/reviews`, {
        method: "POST",
        mode: "cors",
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
    if (!response.ok) {
        throw new Error("Failed to post reviews")
    }
    return await response.json();

}