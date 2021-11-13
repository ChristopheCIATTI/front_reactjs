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

export default function Logout() {

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault()
        sessionStorage.removeItem("token")
        localStorage.removeItem("userEmail")
        history.push("/");
        window.location.reload();
        }

    return(
    <>
        <h3>Se deconncecter</h3>
        <form onSubmit={handleSubmit}>
            <Button type="submit" variant="primary">Se deconnecter</Button>
        </form>
        
    </>
)
}
