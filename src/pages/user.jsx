import { useEffect, useState } from "react";
import { 
    Button, 
    Form, 
    Row,
    Col, 
    Table,
    Nav
} from "react-bootstrap";
import Moment from "react-moment";
import { useHistory } from "react-router";
import InputLabel from "../components/form/inputLabel";
import { authenticate, getUserByEmail, getUserData } from "../services/UserApi";

export default function User() {
    const [userData, setUserData] = useState([])
    const [editUserData, setEditUserData] = useState([])

    useEffect(async () => {
        const email = localStorage.getItem("userEmail")
        const data = await getUserData(email)
        if(data) {
            setUserData(data[0])
        }
    }, [])

   const onEdit = () => {
        setEditUserData(false)
        if(editUserData == false) {setEditUserData(true)}
   }

    const handleSubmit = async (event) => {
        event.preventDefault()
        }

    return(
    <>
        <h3>Données utilisateur</h3>
        <Table responsive>
            <thead>
                <tr>
                {Object.keys(userData).map(function(key, index) {
                    if(key === "id") {return}
                    if(key === "password") {return}
                    if(key === "first_name"){return <th>first name</th>}
                    if(key === "last_name"){return <th>Last name</th>}
                    if(key === "birth_date"){return <th>Birth date</th>}
                    if(key === "email_address"){return <th>Email <address></address></th>}
                    if(key === "postal_address"){return <th>Postal address</th>}
                    if(key === "phone_number"){return <th>Phone number</th>}
                    if(key === "turnover"){return <th>Turnover</th>}
                    if(key === "company_charges"){return <th>Company charges</th>}
                    return <th>{key}</th>
                })}            
                </tr>
            </thead>
            <tbody>
            {editUserData ? (
                Object.keys(userData).map(function(key, index) {
                if(key === "id") {return}
                if(key === "password") {return}
                if(key === "birth_date"){
                    let date = new Date(userData[key])
                    return <td>{date.toLocaleDateString()}</td>}
                if(key === "company_charges") {return <td>{userData[key]}%</td>}
                return <td>{userData[key]}</td>
            })): (Object.keys(userData).map(function(key, index) {
                if(key === "id") {return}
                if(key === "password") {return}
                if(key === "first_name"){
                    return <td><input defaultValue={userData[key]} name={key} type="text" required/></td>}
                if(key === "last_name"){
                    return <td><input defaultValue={userData[key]} name={key} type="text" required/></td>}
                if(key === "birth_date"){
                    let date = new Date(userData[key])
                    console.log(date.toLocaleDateString())
                    /*return <td>{date.toLocaleDateString()}</td>*/
                    return <td><input format="MM/DD/YYYY" defaultValue={date.toLocaleDateString()} name={key} type="date" required/></td>
                }
                if(key === "email_address"){
                    return <td><input defaultValue={userData[key]} name={key} type="email" required/></td>}
                if(key === "postal_address"){
                    return <td><input defaultValue={userData[key]} name={key} type="text" required/></td>}
                if(key === "phone_number"){
                    return <td><input defaultValue={userData[key]} name={key} type="number" required/></td>}
                if(key === "turnover"){
                    return <td><input defaultValue={userData[key]} name={key} type="number" required/></td>}
                if(key === "company_charges") {
                        return <td><input defaultValue={userData[key]} name={key} type="text" required/></td>
                    }
                return <td>{userData[key]}</td>
            }))}
            {editUserData ? (
                <Nav.Link href="/user/edit">Edit</Nav.Link>
                /*<td onClick={onEdit}>Edit</td>*/):(<td onClick={onEdit}>Save</td>)}
            </tbody>
        </Table>
        
    </>
)
}

/*<Table responsive>
            <thead>
                <tr>
                {Object.keys(userData).map(function(key, index) {
                    if(key === "id") {return}
                    if(key === "password") {return}
                    if(key === "first_name"){return <th>first name</th>}
                    if(key === "last_name"){return <th>Last name</th>}
                    if(key === "birth_date"){return <th>Birth date</th>}
                    if(key === "email_address"){return <th>Email <address></address></th>}
                    if(key === "postal_address"){return <th>Postal address</th>}
                    if(key === "phone_number"){return <th>Phone number</th>}
                    if(key === "turnover"){return <th>Turnover</th>}
                    if(key === "company_charges"){return <th>Company charges</th>}
                    return <th>{key}</th>
                })}            
                </tr>
            </thead>
            <tbody>
            {editUserData ? (
                Object.keys(userData).map(function(key, index) {
                if(key === "id") {return}
                if(key === "password") {return}
                if(key === "birth_date"){
                    let date = new Date(userData[key])
                    return <td>{date.toLocaleDateString()}</td>}
                if(key === "company_charges") {return <td>{userData[key]}%</td>}
                return <td>{userData[key]}</td>
            })): (Object.keys(userData).map(function(key, index) {
                if(key === "id") {return}
                if(key === "password") {return}
                if(key === "first_name"){
                    return <td><input defaultValue={userData[key]} name={key} type="text" required/></td>}
                if(key === "last_name"){
                    return <td><input defaultValue={userData[key]} name={key} type="text" required/></td>}
                if(key === "birth_date"){
                    let date = new Date(userData[key])
                    console.log(date.toLocaleDateString())
                    /*return <td>{date.toLocaleDateString()}</td>
                    return <td><input format="MM/DD/YYYY" defaultValue={date.toLocaleDateString()} name={key} type="date" required/></td>
                }
                if(key === "email_address"){
                    return <td><input defaultValue={userData[key]} name={key} type="email" required/></td>}
                if(key === "postal_address"){
                    return <td><input defaultValue={userData[key]} name={key} type="text" required/></td>}
                if(key === "phone_number"){
                    return <td><input defaultValue={userData[key]} name={key} type="number" required/></td>}
                if(key === "turnover"){
                    return <td><input defaultValue={userData[key]} name={key} type="number" required/></td>}
                if(key === "company_charges") {
                        return <td><input defaultValue={userData[key]} name={key} type="text" required/></td>
                    }
                return <td>{userData[key]}</td>
            }))}
            {editUserData ? (
                <Nav.Link href="/user/edit">Edit</Nav.Link>
                /*<td onClick={onEdit}>Edit</td>):(<td onClick={onEdit}>Save</td>)}
            </tbody>
        </Table>
*/