export default async function sentOTP(userEmail: string) {
    const response = await fetch("https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/otp/sent-otp", {
        method: "POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
        })
    })

    if (!response.ok) {
        throw new Error("cannot sent OTP.");
    }
    return await response.json();
}