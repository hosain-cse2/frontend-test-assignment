export async function getData() {
    const response = await fetch("http://localhost:3000/api/cones");
    return await response.json();
}