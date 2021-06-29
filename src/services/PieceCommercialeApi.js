const BASE_URL = "https://localhost:8000/api/piece_commerciales"

export function insert(designationCommerciale, quantity) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: headers
        })
    })
}
