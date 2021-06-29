import { useState } from "react"
import { insert } from "../services/PieceCommercialeApi";

export default function CreatePieceCommerciale() {

    const [designationCommerciale, setDesignationCommerciale] = useState()
    const [quantity, setQuantity] = useState()

    const handleDesignationCommercialeInputChange = (event) => {
        event.persist();
        setDesignationCommerciale(event.target.value)
    }

    const handleQuantity = (event) => {
        event.persist();
        setQuantity(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await insert(designationCommerciale, quantity)
    }

    return(
        <section>
            <h4>Piece commerciale</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="designation_commerciale">Designation commerciale</label>
                <input 
                    type="text" 
                    placeholder="Designation commerciale"
                    id="designation_commerciale"
                    name="designation_commerciale"
                    value={designationCommerciale}
                    onChange={handleDesignationCommercialeInputChange}
                    required
                    />

                <label htmlFor="quantity">Quantité</label>
                <input
                    type="number"
                    placeholder="0"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={handleQuantity}
                    required
                    />

                <input type="submit" />
            </form>
        </section>

    )    
}

// Champ piece ext, sous requette qui affihce les piece ext
// Champ piece inté, sous requette qui affihce les piece inté 
// Champ matiere premiere ?? après premiere validation
// quantity
// 