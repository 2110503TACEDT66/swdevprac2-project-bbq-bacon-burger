export default async function getUserProfile(token: string) {
    const response = await fetch("https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/auth/me", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    })
    if (!response.ok) {
        throw new Error("Failed to fetch user profile")
    }
    return await response.json();
}