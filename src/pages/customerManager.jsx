import { useEffect, useState } from "react";
import { 
    Button,  
    Dropdown,
    ButtonGroup,
    Tabs,
    Tab,
    Table,
} from "react-bootstrap";
import InputLabel from "../components/form/inputLabel";
import { deleteBusiness, deleteCustomer, getAllClient, insertBtoB, insertBtoC, searchQuery } from "../services/CustomerManagerApi";

export default function CustomerManager() {

    const[clientBtoC, setclientBtoC] = useState({
        name: null,
        userEmail: null,
        email: null,
        adresse: null,
        numero: null
    })

    const[clientBtoB, setclientBtoB] = useState({
        name: null,
        userEmail: null,
        contactName: null,
        email: null,
        adresse: null,
        numero: null
    })

    const[search, setSearch] = useState({})
    const[addClient, setAddClient] = useState("")
    const[dataLoded, setDataLoaded] = useState([])
    //const[editData, setEditData] = useState([])

    useEffect(async () => {
        const clientData = await getAllClient()
        if(clientData) {setDataLoaded(clientData)}
        localStorage.setItem('customerData', JSON.stringify(dataLoded.customer));
    }, [])

    const handleChangeBtoC = (event) => {
        const value = event.target.value
        const name = event.target.name
        setclientBtoC({...clientBtoC, [name]: value})
    }

    const handleSubmitBtoC = async (event) => {
        event.preventDefault(clientBtoC)
        const email = localStorage.getItem("userEmail")
        clientBtoC["userEmail"] = email
        setclientBtoC(clientBtoC)
        insertBtoC(clientBtoC)
    }

    const handleChangeBtoB = (event) => {
        const value = event.target.value
        const name = event.target.name
        setclientBtoB({...clientBtoB, [name]: value})
    }

    const handleSubmitBtoB = async (event) => {
        event.preventDefault()
        const email = localStorage.getItem("userEmail")
        clientBtoB["userEmail"] = email
        setclientBtoB(clientBtoB)
        insertBtoB(clientBtoB)
    }

    const handeClickAddClient = async (event) => {
        setAddClient(false)
        if(addClient == false) {setAddClient(true)}
    }

    const handeClickLog = (value) => {
        setAddClient(value)
    }

    const handleChangeSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const handleSubmitSearch = async (event) => {
        console.log("ok")
        console.log(search)
        searchQuery(search)
    }

    const onEdit = (type,row_id) => {
        if(type === "customer") {
            const href = "/customerManager/edit/?type=customer&id=" + row_id
            window.location = href
        }
        if(type === "business") {
            const href = "/customerManager/edit/?type=business&id=" + row_id
            window.location = href
        }
    }

    const onDelete = (type,row_id) => {
        if(type === "customer") {
            deleteCustomer(row_id)
        }
        if(type === "business") {
            deleteBusiness(row_id)
        }

        window.location.reload()    
    }
 
    const dataLodedCustomer = []
    for(let value in dataLoded.customer) {
        dataLodedCustomer.push(
            <tr>
                <td>{dataLoded.customer[value].name}</td>
                <td>{dataLoded.customer[value].email}</td>
                <td>{dataLoded.customer[value].phone_number}</td>
                <td>{dataLoded.customer[value].postal_address}</td>
                <Button variant="success" onClick={() => onEdit("customer", dataLoded.customer[value].id)}>Editer</Button>
                <Button variant="danger" onClick={() => onDelete("customer", dataLoded.customer[value].id)}>Supprimer</Button>
            </tr>
        )
    }

    const dataLodedBusiness = []
    for(let value in dataLoded.business) {
        dataLodedBusiness.push(
            <tr>
                <td>{dataLoded.business[value].name}</td>
                <td>{dataLoded.business[value].contact_name}</td>
                <td>{dataLoded.business[value].email}</td>
                <td>{dataLoded.business[value].phone_number}</td>
                <td>{dataLoded.business[value].postal_address}</td>
                <Button variant="success" onClick={() => onEdit("business", dataLoded.business[value].id)}>Editer</Button>
                <Button variant="danger" onClick={() => onDelete("business", dataLoded.business[value].id)}>Supprimer</Button>
            </tr>
        )
    }

    return(
    <>
        <h3>Gestion des clients</h3>
        {dataLoded.customer ? (
            <>
            <Tabs>
                <Tab eventKey="customerData" title="Client">
                    <Table responsive>
                        <thead>
                            <tr>
                                {Object.keys(dataLoded.customer[0]).map(function(key, index) {
                                    if(key === "id") {return}
                                    if(key === "user_id") {return}
                                    if(key === "name") {return <th>Nom</th>}
                                    if(key === "email") {return <th>Email</th>}
                                    if(key === "phone_number") {return <th>Numero de telephone</th>}
                                    if(key === "postal_address") {return <th>Adresse postale</th>}
                                    return <th>{key}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {dataLodedCustomer}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="businessData" title="Entreprise">
                    <Table responsive>
                        <thead>
                            <tr>
                                {Object.keys(dataLoded.business[0]).map(function(key, index) {
                                    if(key === "id") {return}
                                    if(key === "user_id") {return}
                                    if(key === "name") {return <th>Nom</th>}
                                    if(key === "contact_name") {return <th>Contact nom</th>}
                                    if(key === "email") {return <th>Email</th>}
                                    if(key === "phone_number") {return <th>Numero de telephone</th>}
                                    if(key === "postal_address") {return <th>Adresse postale</th>}
                                    return <th>{key}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {dataLodedBusiness}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="addClient" title=<Dropdown as={ButtonGroup}>
            <Button variant="success">Ajouter un Client</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handeClickLog('BtoC')}>Client type particulier (BtoC)</Dropdown.Item>
                <Dropdown.Item onClick={() => handeClickLog('BtoB')}>Client type Entreprise (BtoB)</Dropdown.Item>
                <Dropdown.Item onClick={() => handeClickLog(false)}>Fermer le formulaire</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>>
                </Tab>
                <Tab eventKey="searchTab" title="ta mere la chienne">
                    <h1>BBBBBBBBBBBBBBBBBBBB</h1>
                    <form onSubmit={handleSubmitSearch}>
                        <input onChange={handleChangeSearch} type="text" placeholder="Votre recherche"/>
                    </form>
                </Tab>
            </Tabs>
            </>


        ):(<span></span>)}    
        {/*<Dropdown as={ButtonGroup}>
            <Button variant="success">Ajouter un Client</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handeClickLog('BtoC')}>Client type particulier (BtoC)</Dropdown.Item>
                <Dropdown.Item onClick={() => handeClickLog('BtoB')}>Client type Entreprise (BtoB)</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        */}

        {addClient === "BtoC" ? (<>
            <h4>Nouveau client particulier (BtoC)</h4>
             <form onSubmit={handleSubmitBtoC}>
                <InputLabel name="name" change={handleChangeBtoC} type="text" label="Votre nom" placeholder="Martin" required/>
                <InputLabel name="email" change={handleChangeBtoC} type="email" label="Votre email" placeholder="you@example.com" required />
                <InputLabel name="adresse" change={handleChangeBtoC} type="text" label="Votre adresse" placeholder="line x in table user database x" required />
                <InputLabel name="numero" change={handleChangeBtoC} type="text" label="Votre numéro de tel" placeholder="042XXXXXX" required />
                <Button type="submit" variant="success">Ajouter</Button>
            </form>
            <Button variant="outline-dark" onClick={() => handeClickLog(false)}>Fermer le formulaire</Button>
            </>
        ): (<span></span>)}
        {addClient === "BtoB" ? (<>
            <h4>Nouveau client entreprise (BtoB)</h4>
            <form onSubmit={handleSubmitBtoB}>
               <InputLabel name="name" change={handleChangeBtoB} type="text" label="Votre nom d'entreprise" placeholder="Martin" required/>
               <InputLabel name="contactName" change={handleChangeBtoB} type="text" label="Nom de votre contact" placeholder="Henri Michelon" required/>
               <InputLabel name="email" change={handleChangeBtoB} type="email" label="Votre email" placeholder="you@example.com" required />
               <InputLabel name="adresse" change={handleChangeBtoB} type="text" label="Votre adresse" placeholder="line x in table user database x" required />
               <InputLabel name="numero" change={handleChangeBtoB} type="text" label="Votre numéro de tel" placeholder="042XXXXXX" required />
               <Button type="submit" variant="success">Ajouter</Button>
           </form>
           <Button variant="outline-dark" onClick={() => handeClickLog(false)}>Fermer le formulaire</Button>
           </>
        ): (<span></span>)}
    </>
)
}

/**
 <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>*/
