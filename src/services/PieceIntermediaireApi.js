const BASE_URL = "https://localhost:8000/api/piece_intermediaires"

export function insert(piece_intermedaiaire_quantite, piece_intermediaire_nom) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: headers
        })
    })
}


