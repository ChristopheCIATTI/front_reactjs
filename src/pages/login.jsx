import { useState } from "react";
import { 
    Button, 
    Form, 
    Row,
    Col 
} from "react-bootstrap";
import { useHistory } from "react-router";
import InputLabel from "../components/form/inputLabel";
import { authenticate, getUserByEmail } from "../services/UserApi";

export default function Login() {

    const[user, setUser] = useState({
        password: null,
        emailAddress: null,
    })

    const history = useHistory();


    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await authenticate(user)
        sessionStorage.setItem("token", response.accessToken)
        localStorage.setItem("userEmail", user.emailAddress)
        history.push("/");
        window.location.reload();
        }

    return(
    <>
        <h3>Se conncecter</h3>
        <form onSubmit={handleSubmit}>
            <InputLabel name="emailAddress" change={handleChange} type="email" label="Votre adresse email" placeholder="you@example.com" required />
            <InputLabel name="password" change={handleChange} type="password" label="Votre mot de passe" placeholder="" required />
            <Button type="submit" variant="success">Se connecter</Button>
        </form>
        
    </>
)
}
