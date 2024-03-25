export default async function userCreateBooking(token: string, hid: string, uid: string, checkInDate: string, checkOutDate: string, file: string){
    const response = await fetch(`http://localhost:5000/api/v1/hotels/${hid}/bookings`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            user: uid,
            file: file
        })
    })

    if (!response.ok) {
        throw new Error("POST Failed");
    }
    return await response.json();
}