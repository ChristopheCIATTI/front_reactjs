import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import { getCustomerBtoBById, getCustomerBtoCById, updateBusiness, updateCustomer } from "../services/CustomerManagerApi";

export default function CustomerManagerEdit() {

    const[customer, setCustomer] = useState({
        type: null,
        id: null
    })
    const[customerBtoC, setCustomerBtoC] = useState([])
    const[customerBtoB, setCustomerBtoB] = useState([])
    
    const[editCustomer, setEditCustomer] = useState({
        id: null,
        name: null,
        email: null,
        phone_number: null,
        postal_address: null
    })
    const[editBusiness, setEditBusiness] = useState({
        id: null,
        name: null,
        contact_name: null,
        email: null,
        phone_number: null,
        postal_address: null
    })

    useEffect(async () => {
        const urlParams = new URLSearchParams(window.location.search);
        customer["type"] = urlParams.get("type")
        customer["id"] = urlParams.get("id")

        if(customer["type"] === "customer") {
            const data = await getCustomerBtoCById(customer["id"])
            if(data) {setCustomerBtoC(data)}
        }

        if(customer["type"] === "business") {
            const data = await getCustomerBtoBById(customer["id"])
            if(data) {setCustomerBtoB(data)}
        }
    }, [])

    const handleChangeBtoC = (event) => {
        const value = event.target.value
        const name = event.target.name
        setEditCustomer({...editCustomer, [name]: value}) 
    }

    const handleChangeBtoB = (event) => {
        const value = event.target.value
        const name = event.target.name
        setEditBusiness({...editBusiness, [name]: value}) 
    }

    const handleSubmitBtoC = async (event) => {
        event.preventDefault()

        editCustomer.id = customerBtoC[0].id
        if(editCustomer.name === undefined || editCustomer.name === null) {
            editCustomer.name = customerBtoC[0].name
        }

        if(editCustomer.email === undefined || editCustomer.email === null) {
            editCustomer.email = customerBtoC[0].email
        }

        if(editCustomer.phone_number === undefined || editCustomer.phone_number === null) {
            editCustomer.phone_number = customerBtoC[0].phone_number
        }

        if(editCustomer.postal_address === undefined || editCustomer.postal_address === null) {
            editCustomer.postal_address = customerBtoC[0].postal_address
        }

        updateCustomer(editCustomer)
    }

    const handleSubmitBtoB = async (event) => {
        event.preventDefault()

        editBusiness.id = customerBtoB[0].id
        if(editBusiness.name === undefined || editBusiness.name === null) {
            editBusiness.name = customerBtoB[0].name
        }

        if(editBusiness.contact_name === undefined || editBusiness.contact_name === null) {
            editBusiness.contact_name = customerBtoB[0].contact_name
        }

        if(editBusiness.email === undefined || editBusiness.email === null) {
            editBusiness.email = customerBtoB[0].email
        }

        if(editBusiness.phone_number === undefined || editBusiness.phone_number === null) {
            editBusiness.phone_number = customerBtoB[0].phone_number
        }

        if(editBusiness.postal_address === undefined || editBusiness.postal_address === null) {
            editBusiness.postal_address = customerBtoB[0].postal_address
        }

        updateBusiness(editBusiness)
    }

    return(
        <>
        <h4>Editer</h4>
        {customer["type"] === "customer" ? (<>
            <form onSubmit={handleSubmitBtoC}>
                <div><label htmlFor="name">Editer nom</label>
                <input onChange={handleChangeBtoC} name="name" defaultValue={customerBtoC[0].name} type="text"/></div>
                <div><label htmlFor="email">Editer email</label>
                <input onChange={handleChangeBtoC} name="email" defaultValue={customerBtoC[0].email} type="email"/></div>
                <div><label htmlFor="phone_number">Editer numero de telehpone</label>
                <input onChange={handleChangeBtoC} name="phone_number" defaultValue={customerBtoC[0].phone_number} type="text"/></div>
                <div><label htmlFor="postal_address">Editer adresse</label>
                <input onChange={handleChangeBtoC} name="postal_address" defaultValue={customerBtoC[0].postal_address} type="text"/></div>
                <Button type="submit" variant="success">Enregistrer</Button>
            </form>
        </>):(<span></span>)}
        {customer["type"] === "business" ?(
                <form onSubmit={handleSubmitBtoB}>
                <div><label htmlFor="name">Editer nom</label>
                <input onChange={handleChangeBtoB} name="name" defaultValue={customerBtoB[0].name} type="text"/></div>
                <div><label htmlFor="contact_name">Editer nom contact</label>
                <input onChange={handleChangeBtoB} name="contact_name" defaultValue={customerBtoB[0].contact_name} type="text"/></div>
                <div><label htmlFor="email">Editer email</label>
                <input onChange={handleChangeBtoB} name="email" defaultValue={customerBtoB[0].email} type="email"/></div>
                <div><label htmlFor="phone_number">Editer numero de telehpone</label>
                <input onChange={handleChangeBtoB} name="phone_number" defaultValue={customerBtoB[0].phone_number} type="text"/></div>
                <div><label htmlFor="postal_address">Editer adresse</label>
                <input onChange={handleChangeBtoB} name="postal_address" defaultValue={customerBtoB[0].postal_address} type="text"/></div>
                <Button type="submit" variant="success">Enregistrer</Button>
            </form>
        ):(<span></span>)}

        </>
    )
}
