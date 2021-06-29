import React, { useContext } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import MenuLi from "./menuLi"

export default function Header() {
    const menu = [
        {name: "Home", url: "/"},
        {name: "Gestion des pieces", url: "/pieces"},
        {name: "Creation de pieces", url: "/nouvelle_pieces"}
    ]

    return(
        <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="/">Page principale</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/pieces">Gestion des pieces</Nav.Link>
      <Nav.Link href="/atelier">Fabrication des pieces</Nav.Link>
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
