const BASE_URL = "https://localhost:8000/api/piece_types"

export function getAllType() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}`, {
            method: 'GET',
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
};
