import { useState } from "react";
import { Button } from "react-bootstrap";
import InputLabel from "../components/form/inputLabel";
import { inserrtUser } from "../services/UserApi";

export default function Register() {

    const[user, setUser] = useState({
        firstName: null,
        lastName: null,
        password: null,
        birthDate: null,
        emailAddress: null,
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
        event.preventDefault();
        inserrtUser(user);
        }

    return(
    <>
        <h3>Creer un compte</h3>
        <form onSubmit={handleSubmit}>
            <InputLabel name="firstName" change={handleChange} type="text" label="Votre Prénom" placeholder="Martin" required/>
            <InputLabel name="lastName" change={handleChange} type="text" label="Votre nom" placeholder="Dupond" required />
            <InputLabel name="password" change={handleChange} type="password" label="Votre mot de passe" placeholder="" required />
            <InputLabel name="birthDate" change={handleChange} type="date" label="Votre date de naissance" placeholder="" required />
            <InputLabel name="emailAddress" change={handleChange} type="email" label="Votre adresse email" placeholder="you@example.com" required />
            <InputLabel name="postalAddress" change={handleChange} type="textarea" label="Votre adresse postale" placeholder="55 Rue du Faubourg Saint-Honoré, 75008 Paris" required />
            <InputLabel name="phoneNumber" change={handleChange} type="number" label="Votre numéro de téléphone" placeholder="" required />
            <InputLabel name="turnover" change={handleChange} type="number" label="Votre chiffre d'affaire" placeholder="" required />
            <InputLabel name="companyCharges" change={handleChange} type="number" label="Votre taux de charges en %" placeholder="" required />
            <Button type="submit" variant="success">Soumettre le formulaire d'inscription</Button>
        </form>
    </>
    )
}
