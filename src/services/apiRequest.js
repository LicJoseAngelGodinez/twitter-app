
export default async function ApiRequest(url) {   
    return await fetch(url)
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        return []
    });
}
