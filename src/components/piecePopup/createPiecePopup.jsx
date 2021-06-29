import { useState } from "react";
import { insertPieceCommerciale } from "../../services/PieceApi";
import InputLabel from "../form/inputLabel";

export default function CreatePiecePopup() {
    
    const[piece, setPiece] = useState({
        name: null,
        designation: null,
        quantity: null,
        price: null

    })

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setPiece({...piece, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        insertPieceCommerciale(piece)
    }
    
    return(
        <section>
            <h3>
                Creer une nouvelle piece commerciale
            </h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <InputLabel name="name" change={handleChange} type="text" label="Nom de la nouvelle piece" placeholder="pieceXXX" required/>
                    <InputLabel name="designation" change={handleChange} type="text" label="Nom commercial de la nouvelle piece" placeholder="pieceXXX" required />
                    <InputLabel name="quantity" change={handleChange} value="0" type="number" label="Quantite" placeholder="0" required/>
                    <InputLabel name="price" change={handleChange} value="0.00" type="number" label="Prix" placeholder="0.00" step="0.01" />
                    <button>Creer la piece</button>
                </form>
            </div>
        </section>
    )
}
