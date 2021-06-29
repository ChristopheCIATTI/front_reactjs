import { useEffect, useState } from "react"
import Modal from 'react-modal';
import NewPartPopup from "../components/piecePopup/newPartPopUp";

export default function NewPart() {
    
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    const setPopupIsOpenToTrue = () => {
        setPopupIsOpen(true)
    }
    
    const setPopupIsOpenToFalse = () => {
        setPopupIsOpen(false)
    }

    return(
        <>
            <h1>Creer une nouvelle piece</h1>
            <button onClick={setPopupIsOpenToTrue}>Ouvrir</button>

            <Modal isOpen={popupIsOpen}>
                <button onClick={setPopupIsOpenToFalse}>X</button>
                <NewPartPopup/>
            </Modal>
        </>
    )
}
