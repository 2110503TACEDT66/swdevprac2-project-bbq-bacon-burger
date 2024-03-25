export default async function userBooking(hid: string, uid: string, checkOutDate: string, token: string, checkInDate: string) {
    const response = await fetch(`http://localhost:5000/api/v1/hotels/${hid}/bookings`, {
        method: "POST",
        mode: "cors",
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            user: uid,
            hotel: hid,
        })
    })

    if (!response.ok) {
        throw new Error("POST Failed");
    }
    return await response.json();
}