import { useState } from "react";

export default function EditPieceIntePopup(piece) {
    const [piece, setPiece] = useState({
        name: piece.name,
        quantity: piece.quantity
    })

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setPiece({...piece, [name]: value})
    }

    const handeSubmit = async (event) => {
        event.preventDefault()
        //updatePieceIntermedaire(piece)
    }

    return (
        <section>
            <div>
                <h3>
                    Editer la piece
                    <InputLabel name="name" value={props.name} change={handleChange} type="text" label="Nom de la piece" placeholder="pieceXXX"/>
                    <InputLabel name="quantity" value={props.quantity} change={handleChange} type="number" label="Piece quantite" placeholder="0" />
                </h3>
            </div>
        </section>
    )
}
