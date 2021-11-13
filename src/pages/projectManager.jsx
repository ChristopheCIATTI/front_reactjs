import { useState } from "react";
import { 
    Button, 
    Form, 
    Row,
    Col 
} from "react-bootstrap";
import InputLabel from "../components/form/inputLabel";

export default function ProjectManager() {

    const[user, setUser] = useState({
        firstName: null,
        lastName: null,
        password: null,
        birthDate: null,
        emailAdress: null,
        postalAddress: null,
        phoneNumber: null,
        turnover: null,
        companyCharges: null
    })

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        }

    return(
    <>
        <h3>Gestion des projets</h3>    
    </>
)
}
