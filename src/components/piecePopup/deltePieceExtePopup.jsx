import { useState } from "react";
import { deletePieceCommerciale } from "../../services/PieceApi"

export default function DeletePieceExtePopup(piece) {
    const deletePiece = () => {
        //deletePieceExte(piece)
    }

    return(
        <section>
            <h3>
                Etes vous sure de vouloir supprimer cette piece
            <button onClick={deletePiece}>Supprimer definitevement</button>
            </h3>
        </section>
    )
}