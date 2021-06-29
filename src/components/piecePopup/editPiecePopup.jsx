import { useState } from "react"
import { updatePieceCommerciale } from "../../services/PieceApi"
import InputLabel from "../form/inputLabel"

export default function EditPiecePopup(props) {
    
    const[piece, setPiece] = useState({
        name: props.name, 
        designation: props.designation, 
        quantity: props.quantity, 
        price: props.price,
        id: props.id
    })
    
    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setPiece({...piece, [name]: value})
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        updatePieceCommerciale(piece)
        
    }
    
    return(
        <section>
            <div>
                <h3>Editer la piece</h3>
                <form onSubmit={handleSubmit}>
                    <InputLabel name="name" value={props.name} change={handleChange} type="text" label="Nom de la piece" placeholder="pieceXXX"/>
                    <InputLabel name="designation" value={props.designation} change={handleChange} type="text" label="Nom commercial" placeholder="pieceXXX"/>
                    <InputLabel name="quantity" value={props.quantity} change={handleChange} type="number" label="Piece quantite" placeholder="0" />
                    <InputLabel name="price" value={props.price} change={handleChange} type="number" label="Prix d ela piece" placeholder="0.00" step="0.01"/>
                    <button>Mettre à jour la piece</button>
                </form>
            </div>
            <div>
                
            </div>
        </section>
    )
}
