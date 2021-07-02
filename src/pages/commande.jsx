import Modal from "react-modal";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import DevisPopup from "../components/popup/devisPopUp";

export default function Commande() {

    const [pieceList, setPieceList] = useState([])
    const [devisPopup, setDevisPopUp] = useState(false)
    const setDevisPopupToTrue = () => {
        setDevisPopUp(true)
    }
    const setDevisPopupToFalse = () => {
        setDevisPopUp(false)
    }
    const [commandePopup, setCommandePopup]  = useState([])

    let pieceListTr = []

    for(let data in pieceList) {
        pieceListTr.push(
            <tr>
                <th>{pieceList[data].name}</th>
            </tr>
        )
    }

    return(
        <>
            <h4>
                Devis en cour
                <br/>
                <h4>
                    Pieces:
                    <br/>
                    <Table>
                        <tbody>
                        {pieceListTr}
                        </tbody>
                    </Table>
                </h4>
            </h4>

            <Button onClick={setDevisPopupToTrue} variant="info">Ajouter des pieces au devis</Button>
            <br/>
            <Button variant="success">Faire une commande</Button>
            <br/>
            <Button variant="light">Ancienne commande</Button>
            <Modal isOpen={devisPopup}>
                <Button variant="outline-light" onClick={setDevisPopupToFalse}>&#x274c;</Button>
                <DevisPopup 
                    pieceList={pieceList}
                    setPieceList={setPieceList}/>
            </Modal>
        </>
    )
}
