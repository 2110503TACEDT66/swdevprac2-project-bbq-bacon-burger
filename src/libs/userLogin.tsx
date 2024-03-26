export default async function userLogIn(userEmail: string, userPassword: string) {
    const response = await fetch("https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        })
    })

    if (!response.ok) {
        throw new Error("Login failed");
    }
    return await response.json();
}