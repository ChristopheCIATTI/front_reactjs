const PIECE_COMMERCIALE_URL = "https://localhost:8000/api/piece_commerciale"
const PIECE_INTERMEDIAIRE_URL = "https://localhost:8000/api/piece_intermediaire"
const PIECE_EXTERIEURE_URL = "https://localhost:8000/api/piece_exterieure"
const PIECE_COMMERCIAL_INTERMEDIAIRE_URL = "https://localhost:8000/api/piece_commerciale_piece_intermedaire"
const PIECE_COMMERCIAL_EXTERIEURE_URL = "https://localhost:8000/api/piece_commerciale_piece_exterieure"
const PIECE_COMMERCIAL_NAME_URL = "https://localhost:8000/api/piece_commerciale/name"
const ADD_COMMERCIAL_INTERMEDIAIRE_URL = "https://localhost:8000/api/piece_commerciale_piece_intermedaire"
const PIECE_COMMERCIALE_MATIRER_PREMIERE_URL = "https://localhost:8000/api/matiere_premiere_piece_commerciale"
const MATIERE_PREMIERE_URL = "https://localhost:8000/api/matiere_premiere"
const PIECE_INTERMEDIAIRE_INTERMEDIAIRE_URL = "https://localhost:8000/api/piece_intermedaire_piece_intermedaire"
const PIECE_INTERMEDIAIRE_EXTERIEURE_URL = "https://localhost:8000/api/piece_intermedaire_piece_exterieure"

export function getAllPiecesCommerciale() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_COMMERCIALE_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllPiecesIntermediaire() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_INTERMEDIAIRE_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllPiecesExterieure() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_EXTERIEURE_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function insertPieceCommerciale(piece) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    return new Promise((resolve, reject) => {
        fetch(`${PIECE_COMMERCIALE_URL}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(piece)
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })

}

export function updatePieceCommerciale(piece) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    return new Promise((resolve, reject) => {
        fetch(`${PIECE_COMMERCIALE_URL}/${piece.id}`, {
            method: "PUT",
            Headers: headers,
            body: JSON.stringify(piece)
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function deletePieceCommerciale(piece) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    return new Promise((resolve, reject) => {
        fetch(`${PIECE_COMMERCIALE_URL}/${piece.id}`, {
            method: "DELETE",
            Headers: headers,
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getPieceCommercialePieceIntermedaireById(piece) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_COMMERCIAL_INTERMEDIAIRE_URL}/${piece.id}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getPieceCommercialePieceExterieureById(piece) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    console.log(`${PIECE_COMMERCIAL_EXTERIEURE_URL}/${piece.id}`)

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_COMMERCIAL_EXTERIEURE_URL}/${piece.id}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getPieceIntermedaireById(piece) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_INTERMEDIAIRE_URL}/${piece.PieceIntermedaireId}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getPieceExterieureById(piece) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    console.log(`${PIECE_EXTERIEURE_URL}/${piece.PieceExterieureId}`)

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_EXTERIEURE_URL}/${piece.PieceExterieureId}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function inserPieceCommercialePieceIntermediaire(piece) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${ADD_COMMERCIAL_INTERMEDIAIRE_URL}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(piece)
        })
    })
}

export function inserPieceCommercialePieceExterieure(piece) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_COMMERCIAL_EXTERIEURE_URL}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(piece)
        })
    })
}

export function getPieceCommercialeMPById(piece) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_COMMERCIALE_MATIRER_PREMIERE_URL}/${piece.id}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getMatiereById(matiere) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_COMMERCIALE_MATIRER_PREMIERE_URL}/${matiere.PieceeId}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllMP() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${MATIERE_PREMIERE_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getPieceIntermerPieceIntermdaireNyId(piece) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_INTERMEDIAIRE_INTERMEDIAIRE_URL}/${piece.id}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getPieceIntermediairePieceExterieureById(piece) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_INTERMEDIAIRE_EXTERIEURE_URL}/${piece.id}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getPIPieceIntermedaireById(piece) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${PIECE_INTERMEDIAIRE_EXTERIEURE_URL}/${piece.id}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getPieceIdByName(object) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    console.log(object)
    /*
    return new Promise((resolve, reject) => {
        fetch(`${PIECE_COMMERCIAL_NAME_URL}/${piece.id}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
    */
}