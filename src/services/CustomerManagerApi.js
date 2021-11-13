const BTOC_URL = "http://localhost:3333/customer/BtoC/"
const BTOB_URL = "http://localhost:3333/customer/BtoB/"
const ALL_CLIENT_URL = "http://localhost:3333/customer/"


const TOKEN = sessionStorage.getItem("token")
const EMAIL = localStorage.getItem("userEmail")

export function getAllClient() {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)
    const get_all_client_url = ALL_CLIENT_URL + "?email=" + EMAIL
    console.log(get_all_client_url)
    return new Promise((resolve, reject) => {
        fetch(`${get_all_client_url}`, {
            method: "GET",
            headers: headers,
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function insertBtoC(clientBtoC, email) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)

    return new Promise((resolve, reject) => {
        fetch(`${BTOC_URL}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(clientBtoC)
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function insertBtoB(clientBtoB) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)

    return new Promise((resolve, reject) => {
        fetch(`${BTOB_URL}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(clientBtoB)
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getCustomerBtoCById(id) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)

    return new Promise((resolve, reject) => {
        fetch(`${BTOC_URL}${id}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getCustomerBtoBById(id) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)

    return new Promise((resolve, reject) => {
        fetch(`${BTOB_URL}${id}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function updateCustomer(customer) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)

    return new Promise((resolve, reject) => {
        fetch(`${BTOC_URL}${customer.id}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(customer)
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function updateBusiness(business) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)

    return new Promise((resolve, reject) => {
        fetch(`${BTOB_URL}${business.id}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(business)
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function deleteCustomer(id) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)

    console.log(`${BTOC_URL}${id}`)

    return new Promise((resolve, reject) => {
        fetch(`${BTOC_URL}${id}`, {
            method: "DELETE",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function deleteBusiness(id) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set( 'Authorization', TOKEN)

    return new Promise((resolve, reject) => {
        fetch(`${BTOB_URL}${id}`, {
            method: "DELETE",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function searchQuery(search) {
    console.log(search)
}
