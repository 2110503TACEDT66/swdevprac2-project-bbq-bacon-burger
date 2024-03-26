export default async function userDeleteBooking(token: string, bid: string) {
    const response = await fetch(`https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/bookings/${bid}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            authorization: `Bearer ${token}`,
        },
    })

    if (!response.ok) {
        throw new Error("Failed to Delete Booking");
    }
    return await response.json();
}