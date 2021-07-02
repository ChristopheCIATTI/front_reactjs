import { useEffect, useState } from "react"
import Modal from 'react-modal';
import HeaderPiece from "../components/headerPiece/headerPiece"
import EditPiecePopup from "../components/piecePopup/editPiecePopup"
import DeletePiecePopup from "../components/piecePopup/deletePiecePopup"
import { getAllPiecesCommerciale, getAllPiecesExterieure, getAllPiecesIntermediaire } from "../services/PieceApi"
import { NavLink } from "react-router-dom";
import CreatePiecePopup from "../components/piecePopup/createPiecePopup";
import ReadPiecePopup from "../components/piecePopup/readPiecePopup";
import CreatePieceInte from "../components/piecePopup/createPieceInte";
import CreatePieceExte from "../components/piecePopup/createPieceExtePopup";
import { Button, Table } from "react-bootstrap";
import ReadPieceIntePopup from "../components/piecePopup/readPieceIntePopup";

export default function Piece() {

    const [piecesCommerciale, setPiecesCommerciale] = useState([])
    const [piecesIntermediaire, setPiecesIntermediaire] = useState([])
    const [piecesExterieure, setPiecesExterieure] = useState([])
    const piecesCommercialeTr = []
    const piecesIntermediaireTr = []
    const piecesExterieureTr = []

    const [popupEdit, setPopupEdit] = useState(false);
    const [popupDelete, setPopupDelete] = useState(false);
    const [popupCreate, setPopupCreate] = useState(false)
    const [popupRead, setPopupRead] = useState(false)

    const [popInteRead, setPopInteRead] = useState(false)

    const [popCreatePieceInte, setPopCreatePieceInte] = useState(false)

    const [popCreatePieceExte, setPopCreatePieceExte] = useState(false)

    //const [popupRead, setPopupRead] = useState([])

    const setPopupCreateToTrue = () => {
        setPopupCreate(true)
    }
    const setPopupCreateToFalse = () => {
        setPopupCreate(false)
    }
    const setPopupEditToTrue = () => {
        setPopupEdit(true)
    }
    const setPopupEditToFalse = () => {
        setPopupEdit(false)
    }
    const setPopupDeleteToTrue = () => {
        setPopupDelete(true)
    }
    const setPopupDeleteToFalse = () => {
        setPopupDelete(false)
    }
    const setPopupReadToTrue = () => {
        setPopupRead(true)
    }
    const setPopupReadToFalse = () => {
        setPopupRead(false)
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
    const setPopupPIeceInteReadToTrue = () => {
        setPopInteRead(true)
    }
    const setPopupPIeceInteReadToFalse = () => {
        setPopInteRead(false)
    }

    useEffect(async () => {
        const piecesCommercialeData = await getAllPiecesCommerciale()
        const piecesIntermediaireData = await getAllPiecesIntermediaire()
        const piecesExterieureData = await getAllPiecesExterieure()

        if(piecesCommercialeData) {
            setPiecesCommerciale(piecesCommercialeData)
        }
        if(piecesIntermediaireData) {
            setPiecesIntermediaire(piecesIntermediaireData)
        }
        if(piecesExterieureData) {
            setPiecesExterieure(piecesExterieureData)
        }
    }, [])


    for(let piece in piecesCommerciale) {
        piecesCommercialeTr.push(
            <>
            <tr>
                <th>Nom de la piece</th>
                <td>{piecesCommerciale[piece].name}</td>
                <th>Nom commercial</th>
                <td>{piecesCommerciale[piece].pieceCommercialeDesignation}</td>
                <th>Quantité</th>
                <td>{piecesCommerciale[piece].quantity}</td>
                <th>Prix</th>
                <td>{piecesCommerciale[piece].price}</td>
                <td><Button variant="outline-dark" onClick={setPopupReadToTrue}>Voir la piece</Button></td>            
                <td><Button variant="outline-dark" onClick={setPopupEditToTrue}>Editer</Button>
                </td>
                <td><Button variant="outline-dark" onClick={setPopupDeleteToTrue}>Supprimer</Button></td>
            </tr>
            
            {<Modal isOpen={popupRead} id={piecesCommerciale[piece].id}>
            <Button variant="outline-light" onClick={setPopupReadToFalse}>&#x274c;</Button>
            <ReadPiecePopup 
                id={piecesCommerciale[piece].id}
                name={piecesCommerciale[piece].name}
                designation={piecesCommerciale[piece].pieceCommercialeDesignation}
                quantity={piecesCommerciale[piece].quantity}
                price={piecesCommerciale[piece].price}
                />
            </Modal>
            }
            <Modal isOpen={popupEdit}>
            <Button variant="outline-light" onClick={setPopupEditToFalse}>&#x274c;</Button>
            <EditPiecePopup 
                name={piecesCommerciale[piece].name}
                quantity={piecesCommerciale[piece].quantity}
                designation={piecesCommerciale[piece].pieceCommercialeDesignation}
                price={piecesCommerciale[piece].price}
                id={piecesCommerciale[piece].id}
                />
            </Modal>
            <Modal isOpen={popupDelete}>
            <Button variant="outline-light" onClick={setPopupDeleteToFalse}>&#x274c;</Button>
            <DeletePiecePopup
                id={piecesCommerciale[piece].id}/>
            <button onClick={setPopupDeleteToFalse}>Annuler</button>
            </Modal>
            </>
            )
    }
    for(let piece in piecesIntermediaire) {
        piecesIntermediaireTr.push(       
            <>
            <tr>
                <th>Nom de la piece</th>
                <td>{piecesIntermediaire[piece].name}</td>
                <th>Quantité</th>
                <td>{piecesIntermediaire[piece].quantity}</td>
                <td><Button variant="outline-dark" onClick={setPopInteRead}>Voir la piece</Button></td>            
            </tr>
            <Modal isOpen={popInteRead}>
                <Button variant="outline-light" onClick={setPopupPIeceInteReadToFalse}>&#x274c;</Button>
                <ReadPieceIntePopup
                 id={piecesIntermediaire[piece].id}
                 name={piecesIntermediaire[piece].name}
                 quantity={piecesIntermediaire[piece].quantity} />
            </Modal>
            </>
        )                
    }
    console.log(piecesExterieure)
    for(let piece in piecesExterieure) {
        piecesExterieureTr.push(
            <tr>
                <th>Nom de la piece</th>
                <td>{piecesExterieure[piece].name}</td>
                <th>Quantité</th>
                <td>{piecesExterieure[piece].quantity}</td>
            </tr>)
    }

    return(
        <>
            <HeaderPiece/>
            <section>
                <th>
                    Pieces Commerciale
                </th>
                {/* <th>
                    <Button onClick={setPopupCreateToTrue} variant="dark">Nouvelle piece</Button>
                </th> */}
                <Modal isOpen={popupCreate}>
                    <Button variant="outline-light" onClick={setPopupCreateToFalse}>&#x274c;</Button>
                    <CreatePiecePopup/>
                </Modal>
                
                <Table>
                    <tbody>
                        {piecesCommercialeTr}
                    </tbody>
                </Table>
                <th>
                    Pieces Intermediaire
                </th>
                {/*<th>
                    <Button variant="dark" onClick={setPopupCreatePieceInteToTrue}>Nouvelle piece</Button>
                </th>*/}
                <Modal isOpen={popCreatePieceInte}>
                    <Button variant="outline-light" onClick={setPopupCreatePieceInteToFalse}>&#x274c;</Button>
                    <CreatePieceInte/>
                </Modal>
                <Table id="indexPiecesIntermediaireTable">
                    <tbody id="itemIndexPiecesIntermediaireTable">
                        {piecesIntermediaireTr}
                    </tbody>
                </Table>
                <th>
                    Pieces Exterieure
                </th>
                {/* <th>
                    <Button variant="dark" onClick={setPopupCreatePieceExteToTrue}>Nouvelle piece</Button>
                </th> */}
                
                {/*<Modal isOpen={popCreatePieceInte}>
                    <button onClick={setPopupCreatePieceExteToFalse}>X</button>
                    <CreatePieceExte/>
                </Modal>*/}
                <Table id="indexPiecesExterieureTable">
                    <tbody id="itemIndexPiecesExterieureTable">
                        {piecesExterieureTr}
                    </tbody>
                </Table>
            </section>
        </>
    )
}

/**
 * <HeaderPiece/>
            <section>
                <th>
                    Pieces Commerciale
                </th>
                <th>
                    <Button onClick={setPopupCreateToTrue} variant="dark">Nouvelle piece</Button>
                </th>
                <Modal isOpen={popupCreate}>
                    <Button variant="outline-light" onClick={setPopupCreateToFalse}>&#x274c;</Button>
                    <CreatePiecePopup/>
                </Modal>
                <table id="indexPiecesCommercialeTable">
                    <tbody id="itemIndexPiecesCommercialeTable">
                        {piecesCommercialeTr}
                    </tbody>
                </table>
                <th>
                    Pieces Intermediaire
                </th>
                <th>
                    <Button variant="dark" onClick={setPopupCreatePieceInteToTrue}>Nouvelle piece</Button>
                </th>
                <Modal isOpen={popCreatePieceInte}>
                    <Button variant="outline-light" onClick={setPopupCreatePieceInteToFalse}>&#x274c;</Button>
                    <CreatePieceInte/>
                </Modal>
                <table id="indexPiecesIntermediaireTable">
                    <tbody id="itemIndexPiecesIntermediaireTable">
                        {piecesIntermediaireTr}
                    </tbody>
                </table>
                <th>
                    Pieces Exterieure
                </th>
                <th>
                    <Button variant="dark" onClick={setPopupCreatePieceExteToTrue}>Nouvelle piece</Button>
                </th>
                
                {/*<Modal isOpen={popCreatePieceInte}>
                    <button onClick={setPopupCreatePieceExteToFalse}>X</button>
                    <CreatePieceExte/>
                </Modal>*//*}
                /*<table id="indexPiecesExterieureTable">
                    <tbody id="itemIndexPiecesExterieureTable">
                        {piecesExterieureTr}
                    </tbody>
                </table>
            </section>
 */