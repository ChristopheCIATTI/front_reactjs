import Piece from "../../pages/piece";
import InputLabel from "../form/inputLabel";

export default function EditQuantityPieceInte() {


    //console.log(piece)

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
    }
    
    return(
        <>
            <h3>Definier nouvelle quantite</h3>
            <form>
                <InputLabel name="quantity" value={Piece.quantity} change={handleChange} type="number" label="Quantite" placeholder="0"  />
            </form>
        </>
    )
}