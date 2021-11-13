import React, { useContext } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Login from '../../pages/login'
import MenuLi from "./menuLi"

export default function Header() {
    const menu = [
        {name: "Home", url: "/"},
        {name: "Creer un compte", url: "/register"},
        {name: "Se conncecter", url: "/login"},
        {name: "Gestion des clients", url: "/customerManager"},
        {name: "Gestion des projets", url: "/projectManager"}
    ]

    const isLogin = sessionStorage.getItem("token")

    return(
        <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="/">Page principale</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    {isLogin ?
            (<><Nav.Link href="/logout">Se deconnecter</Nav.Link><Nav.Link href="/user">Mon profil</Nav.Link></>):
            (<><Nav.Link href="/register">Creer un compte</Nav.Link><Nav.Link href="/login">Se connecter</Nav.Link></>)
      }
      <Nav.Link href="/customerManager">Gestion des clients</Nav.Link>
      <Nav.Link href="/projectManager">Gestion des projets</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        /*<Nav
            variant="pills"
            defaultActiveKey="/"
        >
            <Nav.Item>
                <Nav.Link href="/" >Page principale</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/pieces" >Gestion des pieces</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/atelier">Fabrication des pieces </Nav.Link>
            </Nav.Item>
        </Nav>*/

        /*<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    {menu.map((linkData, index) => <MenuLi key={index} name={linkData.name} url={linkData.url} />)}
                </ul>
            </div>

    </nav>*/
    )
}
