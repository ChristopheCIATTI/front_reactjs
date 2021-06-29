import { useState } from "react";
import { deletePieceCommerciale } from "../../services/PieceApi"

export default function DeletePiecePopup(props) {
    const deletePiece = () => {
        deletePieceCommerciale(props)
    }

    return(
        <section>
            <h2>
                Etes vous sure de vouloir supprimer cette piece
            </h2>
            <button onClick={deletePiece}>Supprimer definitevement</button>
        </section>
    )
}