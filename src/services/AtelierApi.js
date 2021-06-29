const GAMME_URL = "https://localhost:8000/api/gamme"
const GAMME_OPERATION_URL = "https://localhost:8000/api/gamme/operation"
const GAMME_OPERATION_BY_ID_URL = "https://localhost:8000/api/gamme/operation/gammeId"
const OPERATION_URL = "https://localhost:8000/api/operation"
const POSTE_URL = "https://localhost:8000/api/poste"
const POSTE_TYPE_TYPE_URL = "https://localhost:8000/api/poste/type/type"
const POSTE_QUALIFICATION_URL = "https://localhost:8000/api/poste/qualification"
const POSTE_TYPE_URL = "https://localhost:8000/api/poste/type"
const MACHINE_TYPE_URL = "https://localhost:8000/api/machineType"
const MACHINE_URL = "https://localhost:8000/api/machine"
const OUVRIER_URL = "https://localhost:8000/api/ouvrier"
const OUVRIER_QUALIFICATION_URL = "https://localhost:8000/api/ouvrier/qualification"
const RESPONSABLE_URL = "https://localhost:8000/api/responsable"
const REALISATION_URL = "https://localhost:8000/api/realisation"
const REALISATION_NAME_URL = "https://localhost:8000/api/realisation/name"
const REALISATION_OPERATION ="https://localhost:8000/api/realisation/operation"


export function getAllGame() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${GAMME_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllGammeOperation() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${GAMME_OPERATION_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllOperation() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${OPERATION_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllPoste() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${POSTE_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllPosteQualification() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${POSTE_QUALIFICATION_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllPosteType() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${POSTE_TYPE_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllMachine() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${MACHINE_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllMachineType() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${MACHINE_TYPE_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllOuvrier() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${OUVRIER_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllOuvrierQualiication() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${OUVRIER_QUALIFICATION_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getAllResponsable() {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${RESPONSABLE_URL}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getGameOperationById(gamme) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${GAMME_OPERATION_BY_ID_URL}/${gamme.id}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getOperationByOperationId(operation) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${OPERATION_URL}/${operation.OperationId}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getPosteTypeByType(object) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${POSTE_TYPE_TYPE_URL}/${object.PosteDeTravailType}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getMachineByType(object) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${MACHINE_TYPE_URL}/${object.MachineType}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getPosteQualificationByPosteId(object) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${POSTE_QUALIFICATION_URL}/${object.PosteDeTravailId}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function getOuvrierQualificationByQualificiation(object) {
    console.log(object)

    return 0
}

export function insertRealisation(object) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${REALISATION_URL}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(object)
        })
    })
}

export function getRealisationByName(object) {
    let headers = new Headers()
    headers.set('accept', 'application/json')

    console.log(`${REALISATION_NAME_URL}/${object.name}`)

    return new Promise((resolve, reject) => {
        fetch(`${REALISATION_NAME_URL}/${object.name}`, {
            method: "GET",
            headers: headers
        })
        .then(response => {resolve(response.json())})
        .catch(error => reject(error))
    })
}

export function insertRealisationOperation(object) {
    let headers = new Headers()
    headers.set('Content-Type', 'application/json')

    return new Promise((resolve, reject) => {
        fetch(`${REALISATION_OPERATION}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(object)
        })
    })
}
