export default function DeletePieceIntePopup(piece) {
    const deletePiece = () => {
        //deletePieceInte(piece)
    }

    return (
        <section>
            <h3>
                Etes vous sure de vouloir supprimer cette piece
            <button onClick={deletePiece}>Supprimer definitevement</button>
            </h3>
        </section>
    )
}