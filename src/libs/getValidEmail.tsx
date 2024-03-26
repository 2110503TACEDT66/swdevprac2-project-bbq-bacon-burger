export default async function getValidEmail(email:string) {
    const response = await fetch(`http://localhost:5000/api/v1/auth/email?email=${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) return true;
    
    return false;

    
}