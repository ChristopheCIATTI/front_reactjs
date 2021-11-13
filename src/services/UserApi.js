const USER_URL = "http://localhost:3333/user/"
const TOKEN = sessionStorage.getItem("token")

export function getAllUser() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${USER_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function inserrtUser(object) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${USER_URL + "register"}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(object)
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function authenticate(object) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    return new Promise((resolve, reject) => {
        fetch(`${USER_URL + "authenticate"}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(object)
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getUserData(email) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)
    
    return new Promise((resolve, reject) => {
        fetch(`${USER_URL + "data/"}${email}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function updateUser(user, email) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)

    return new Promise((resolve, reject) => {
        fetch(`${USER_URL + "data/"}${email}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(user)
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}
