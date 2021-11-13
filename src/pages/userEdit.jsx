import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import InputLabel from "../components/form/inputLabel"
import { getUserData, updateUser } from "../services/UserApi"

export default function UserEdit() {
    const [userData, setUserData] = useState([])
    const [editUserData, setEditUserData] = useState([])

    const[user, setUser] = useState({
        firstName: null,
        lastName: null,
        emailAddress: null,
        postalAddress: null,
        phoneNumber: null,
        turnover: null,
        companyCharges: null
    })
    
    useEffect(async () => {
        const email = localStorage.getItem("userEmail")
        const data = await getUserData(email)
        if(data) {
            setUserData(data[0])
        }
    }, [])


    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = localStorage.getItem("userEmail")

        if(user.firstName === undefined || user.firstName === null) {
            user.firstName = userData["first_name"]
        }

        if(user.lastName === undefined || user.lastName === null) {
            user.lastName = userData["last_name"]
        }

        if(user.emailAddress === undefined || user.emailAddress === null) {
            user.emailAddress = userData["email_address"]
        }

        if(user.postalAddress === undefined || user.postalAddress === null) {
            user.postalAddress = userData["postal_address"]
        }

        if(user.phoneNumber === undefined || user.phoneNumber === null) {
            user.phoneNumber = userData["phone_number"]
        }

        if(user.turnover === undefined || user.turnover === null) {
            user.turnover = userData["turnover"]
        }

        if(user.companyCharges === undefined || user.companyCharges === null) {
            user.companyCharges = userData["companyCharges"]
        }
        
        await updateUser(user, email)
        
    }

    return(
        <>
        <h3>Editer vos données</h3>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="firstName">Editer votre Prénom</label>
            <input onChange={handleChange} name="firstName" defaultValue={userData["first_name"]} type="text"/>
            </div>
            <div>
            <label htmlFor="lastName">Editer votre nom</label>
            <input onChange={handleChange} name="lastName" defaultValue={userData["last_name"]} type="text"/>
            </div>
            <div>
            <label htmlFor="emailAddress">Editer votre adresse email</label>
            <input onChange={handleChange} name="emailAddress" defaultValue={userData["email_address"]} type="email"/>
            </div>
            <div>
            <label htmlFor="postalAddress">Editer votre adresse postale</label>
            <input onChange={handleChange} name="postalAddress" defaultValue={userData["postal_address"]} type="text"/>
            </div>
            <div>
            <label htmlFor="phoneNumber">Editer votre numéro de téléphone</label>
            <input onChange={handleChange} name="phoneNumber" defaultValue={userData["phone_number"]} type="number"/>
            </div>
            <div>
            <label htmlFor="turnover">Editer votre chiffre d'affaire</label>
            <input onChange={handleChange} name="turnover" defaultValue={userData["turnover"]} type="number"/>
            </div>
            <div>
            <label htmlFor="company_charges">Editer votre taux de charges en %</label>
            <input onChange={handleChange} name="company_charges" defaultValue={userData["company_charges"]} type="number"/>
            </div>
            <Button type="submit" variant="success">Soumettre vos changements</Button>
        </form>
    </>
    )
}