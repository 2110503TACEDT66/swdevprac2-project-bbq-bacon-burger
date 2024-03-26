export default async function getValidEmail(email:string) {
    const response = await fetch(`https://presentation-day-1-bbq-bacon-burger.vercel.app/api/v1/auth/email?email=${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) return true;
    
    return false;

    
}