import { useState } from "react"
import InputLabel from "../form/inputLabel"

export default function CreatePieceInte() {
    const [piece, setPiece] = useState({
        name: null,
        quantity: 0
    })

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setPiece({...piece, [name]: value}) 
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        //inserPieceIntermediaire(piece)
    }
    
    return(
        <section>
            <h3>
                Creer une nouvelle piece intermediaire
            </h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <InputLabel name="name" change={handleChange} type="text" label="Nom de la nouvelle piece" placeholder="pieceXXX" required/>
                    <InputLabel name="quantity" change={handleChange} value="0" type="number" label="Quantite" placeholder="0" required/>
                    <button>Creer la piece</button>
                </form>
            </div>
        </section>
    )
}
