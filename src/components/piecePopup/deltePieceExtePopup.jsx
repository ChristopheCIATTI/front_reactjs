import { useState } from "react";
import { deletePieceCommerciale } from "../../services/PieceApi"
import { Button } from "react-bootstrap";

export default function DeletePieceExtePopup(piece) {
    const deletePiece = () => {
        //deletePieceExte(piece)
    }

    return(
        <section>
            <h3>
                Etes vous sure de vouloir supprimer cette piece
            <Button variant="danger" onClick={deletePiece}>Supprimer definitevement</Button>
            </h3>
        </section>
    )
}
