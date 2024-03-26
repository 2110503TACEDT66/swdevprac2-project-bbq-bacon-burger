export default async function userRegister(userEmail: string, userPassword: string, userName: string, userTel: string, OTP: string) {
    const response = await fetch("https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/auth/register", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
            password: userPassword,
            role: "user",
            tel: userTel,
            otp: OTP
        })
    })

    if (!response.ok) {
        throw new Error("Registered Failed");
    }
    return await response.json();
}