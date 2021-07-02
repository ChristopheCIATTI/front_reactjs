import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { Button, FormLabel, Table } from "react-bootstrap";
import { 
    getAllGame, 
    getAllGammeOperation, 
    getAllMachine, 
    getAllMachineType, 
    getAllOperation, 
    getAllOuvrier, 
    getAllOuvrierQualiication, 
    getAllPoste, 
    getAllPosteQualification, 
    getAllResponsable, 
    getGameOperationById, 
    getMachineByType, 
    getOperationByOperationId, 
    getOuvrierQualificationByQualificiation, 
    getPosteQualificationByPosteId, 
    getPosteTypeByType, 
    getRealisationByName, 
    insertRealisation,
    insertRealisationOperation
} from "../services/AtelierApi";

import CreatePiecePopup from "../components/piecePopup/createPiecePopup";
import CreatePieceInte from "../components/piecePopup/createPieceInte";
import CreatePieceExte from "../components/piecePopup/createPieceExtePopup";

export default function Atelier() {

    const [gamme, setGamme] = useState([])
    const [gammeOperation, setGammeOperation] = useState([])
    const [operation, setOperation] = useState([])
    const [poste, setPoste] = useState([])
    const [posteQualification, setPosteQualification] = useState([])
    const [posteType, setPosteType] = useState([])
    const [machine, setMachine] = useState([])
    const [machineType, setMachineType] = useState([])
    const [ouvrier, setOuvrier] = useState([])
    const [ouvrierQualification, setOuvrierQualification] = useState([])
    const [responsable, setResponsable] = useState([])
    const [creerPiece, setCreerPiece] = useState({
        name: null,
        quantity: null
    })

    const [realisation ,setRealisation] = useState({
        name: null,

    })

    const [realisationOperation, setRealisationOperation] = useState({
        realisationId: null,
        gammeId: null,
        operationId: null,
        posteId: null,
        machineId: null,
        ouvrierId: null
    })

    const gammeArray = []
    const gammeOperationArray = []
    const operationArray = []
    const posteArray = []
    const machineArray = []
    const ouvrierArray = []

    const [popupCreateC, setPopupCreateC] = useState(false)
    const [popCreatePieceInte, setPopCreatePieceInte] = useState(false)
    const [popCreatePieceExte, setPopCreatePieceExte] = useState(false)

    let posteQualificationId = []

    let gammeOperationId = []
    let operationPosteId = []

    let inserPieceComeId = null

    const [popupCreer, setPopupCreer] = useState(false)
    const setPopupCreerToTrue = () => {
        setPopupCreer(true)
    }
    const setPopupCreerToFalse = () => {
        setPopupCreer(false)
    }

    const [showCreerPiece, setShowCreerPiece] = useState(false)
    const setShowCreerPieceToTrue = () => {
        setShowCreerPiece(true)
    }
    const setShowCreerPieceToFalse = () => {
        setShowCreerPiece(false)
    }
    const setPopupCreateCToTrue = () => {
        setPopupCreateC(true)
    }
    const setPopupCreateCToFalse = () => {
        setPopupCreateC(false)
    }
    const setPopupCreatePieceInteToTrue = () => {
        setPopCreatePieceInte(true)
    }
    const setPopupCreatePieceInteToFalse = () => {
        setPopCreatePieceInte(false)
    }
    const setPopupCreatePieceExteToTrue = () => {
        setPopCreatePieceExte(true)
    }
    const setPopupCreatePieceExteToFalse = () => {
        setPopCreatePieceExte(false)
    }
    const pieceType = [
        {type: "piece commerciale", create: setPopupCreateCToTrue},
        {type: "piece intermedaire", create: setPopCreatePieceInte},
        {type: "piece exterieure", create: setPopupCreatePieceExteToTrue}
    ]

    useEffect(async () => {
        const gammeData = await getAllGame()
        const gammeOperationData = await getAllGammeOperation()
        const operationData = await getAllOperation()
        const posteData = await getAllPoste()
        const posteQualificationData = await getAllPosteQualification()
        const posteTypeData = await getAllPosteQualification()
        const machineData = await getAllMachine()
        const machineTypeData = await getAllMachineType()
        const ouvrierData = await getAllOuvrier()
        const ouvrierQualificationData = await getAllOuvrierQualiication()
        const responsableData = await getAllResponsable()

        if(gammeData) {
            setGamme(gammeData)
        }
        if(gammeOperationData) {
            setGammeOperation(gammeOperationData)
        }
        if(operationData) {
            setOperation(operationData)
        }
        if(posteData) {
            setPoste(posteData)
        }
        if(posteQualificationData) {
            setPosteQualification(posteQualificationData)
        }
        if(posteTypeData) {
            setPosteType(posteTypeData)
        }
        if(machineData) {
            setMachine(machineData)
        }
        if(machineTypeData) {
            setMachineType(machineTypeData)
        }
        if(ouvrierData) {
            setOuvrier(ouvrierData)
        }
        if(ouvrierQualificationData) {
            setOuvrierQualification(ouvrierQualificationData)
        }
        if(responsable) {
            setResponsable(responsableData)
        }
    }, [])

    for(let data in gamme) {
        gammeArray.push(
            <>
                <th>Nom</th>
                <tr>{gamme[data].Name}</tr>
            </>
        )
    }

    for(let i in gamme) {
        for(let j in gammeOperation) {
            if(gamme[i].id == gammeOperation[j].GammeId) {
                gammeOperationId.push(gammeOperation[j].GammeId)
            }
        }
    }
   
    for(let i in gammeOperationId) {
        for(let j in operation) {
            if(gammeOperationId[i] == operation[j].id) {
                gammeOperationArray.push(
                    <>
                        <th>Nom</th>
                        <tr>{operation[j].Name}</tr>
                        <th>Poste type</th>
                        <tr>{operation[j].PosteDeTravailType}</tr>
                        <th>Machine type</th>
                        <tr>{operation[j].MachineType}</tr>
                        <th>Temps</th>
                        <tr>{operation[j].TempsDeTravail}</tr>
                    </>
                )
            }
        }
    }
    
    for(let i in poste) {
       for(let j in posteType) {
           if(posteType[j].PosteDeTravailId == poste[i].id) {
               console.log(posteType[j])
                operationPosteId.push(
                    <>
                        <th>Nom</th>
                        <tr>{poste[i].Name}</tr>
                        <th>Qualification</th>
                        <tr>{posteType[j].Qualification}</tr>
                    </>
                )
           }
       }
       for(let j in posteQualification) {
           console.log(posteQualification[j])
           if(posteQualification[j].PosteDeTravailId == poste[i].id) {
            operationPosteId.push(
                    <>
                        <th>Qualification</th>
                        <tr>{posteQualification[j].Qualification}</tr>
                    </>
                ) 
           }
       }
    }

    for(let i in machine) {
        for(let j in machineType) {
            console.log(machine[i])
            console.log(machineType[j])
            if(machine[i].id == machineType[j].MachineId) {
                machineArray.push(
                    <>
                        <th>Nom</th>
                        <tr>{machine[i].Name}</tr>
                        <th>Type</th>
                        <tr>{machineType[j].Type}</tr>
                    </>
                )
            }
        }
    }

    for(let i in ouvrier) {
        for(let j in ouvrierQualification) {
            console.log(ouvrier[i])
            console.log(ouvrierQualification[j])
            if(ouvrier[i].id == ouvrierQualification[j].OuvrierId) {
                ouvrierArray.push(
                    <>
                        <th>Nom</th>
                        <tr>{ouvrier[i].Name}</tr>
                        <th>Type</th>
                        <tr>{ouvrierQualification[j].Qualification}</tr>
                    </>
                )
            }
        }
    }

   const handleChangeRO = (event) => {
        const value = event.target.value
        const name = event.target.name
        console.log(name + " " + value)

        setRealisationOperation({...realisationOperation, [name]: value})
   }

   const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setRealisation({...realisation, [name]: value})
   }

   const handeSubmit = async (event) => {
        event.preventDefault()
        insertRealisation(realisation)
        const getRealisationId = await getRealisationByName(realisation)
        let type = JSON.parse(JSON.stringify(getRealisationId));
       
        let rId = type[0]

        setRealisation({realisationId: {...rId}})
        realisationOperation.realisationId = rId.id

        insertRealisationOperation(realisationOperation)
   }

    const handleChangeCreatePiece = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        setCreerPiece({...creerPiece, [name]: value})
    }

    console.log(creerPiece)

    const handleSubmitCreatePiece = (event) => {
        event.preventDefault()
    }

    return(
        <section>
            <Button variant="dark" onClick={setPopupCreerToTrue}>Creer une piece</Button>
            <p>Gammes d'operation disponible</p>
            <Table bordered hover>
                <tbody>
                {gammeArray}
                </tbody>
            </Table>
                <p>Operration Disponible</p>
            <Table bordered hover>
                <tbody>
                {gammeOperationArray}
                </tbody>
            </Table>
                <p>Poste</p>
            <Table bordered hover>
                <tbody>
                {operationPosteId}
                </tbody>
            </Table>
                <p>Machine</p>
            <Table bordered hover>
                <tbody>
                {machineArray}
                </tbody>
            </Table>
                <p>Ouvrier</p>
            <Table bordered hover>
                <tbody>
                {ouvrierArray}
                </tbody>
            </Table>
            <Modal isOpen={popupCreer}>
                <Button variant="outline-light" onClick={setPopupCreerToFalse}>&#x274c;</Button>
                <form onSubmit={handeSubmit}>
                    <h5>Selectioner une Gamme</h5>
                    {gamme.map((gamme, index) => (
                        <>
                            <br/>
                            <label>{gamme.Name}</label>
                            <input onChange={handleChangeRO} type="radio" name="gammeId" value={gamme.id} required/>
                        </>))}
                    <h5>Selectionner des operations</h5>
                    {
                        operation.map((operation, index) => (
                            <>
                                <br/>
                                <label>{operation.Name}</label>
                                <input onChange={handleChangeRO} type="checkbox" name="operationId" value={operation.id}/>
                            </>
                        ))
                    }
                    <h5>Selectioner un Poste</h5>
                    {poste.map((poste, index) => (
                        <>
                           <br/>
                            <label>{poste.Name}</label>
                            <input onChange={handleChangeRO} type="radio" name="posteId" value={poste.id} required/>
                        </>
                    ))}
                    <h5>Selectioner une Machine</h5>
                    {machine.map((machine, index) => (
                        <>
                            <br/>
                                <label>{machine.Name}</label>
                                <input onChange={handleChangeRO} type="radio" name="machineId" value={machine.id} required/>
                        </>
                    ))}
                    <h5>Selectioner un Ouvrier</h5>
                    {ouvrier.map((ouvrier, index) => (
                        <>
                            <br/>
                                <label>{ouvrier.name}</label>
                                <input onChange={handleChangeRO} type="radio" name="ouvrierId" value={ouvrier.id} required/>
                        </>
                    ))}
                    <h5>Selectioner un Resonsable</h5>
                    {responsable.map((responsable, index) => (
                        <>
                        <br/>
                            <label>{responsable.Name}</label>
                            <input onChange={handleChangeRO} type="radio" name="responsableId" value={responsable.id} required/>
                        </>
                    ))}

                    <br/>
                    <label>Nom de la realisation Realisation</label>
                    <input onChange={handleChange} type="text" name="name" required/>

                    <br/>
                    <Button variant="success" onClick={setShowCreerPieceToTrue}>Etape suivante</Button>
                    {showCreerPiece ? 
                        <>
                        <br/>
                        {pieceType.map((pieceType, index) => (<><Button onClick={pieceType.create} variant="outline-dark">{pieceType.type}</Button><br/></>))}
                        <Modal isOpen={popupCreateC}>
                            <Button variant="outline-light" onClick={setPopupCreateCToFalse}>&#x274c;</Button>
                            <CreatePiecePopup pieceId={inserPieceComeId}/>
                        </Modal>
                        <Modal isOpen={popCreatePieceInte}>
                            <Button variant="outline-light" onClick={setPopupCreatePieceInteToFalse}>&#x274c;</Button>
                            <CreatePieceInte/>
                        </Modal>
                        <Modal isOpen={popCreatePieceExte}>
                            <button onClick={setPopupCreatePieceExteToFalse}>X</button>
                            <CreatePieceExte/>
                        </Modal>
                        </>
                    : null}
                </form>
                
            </Modal>

        </section>
    )
}
