import { useState } from "react";
import InputLabel from "../form/inputLabel";
import { 
    Button, 
    Form, 
    Row,
    Col 
} from "react-bootstrap";

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
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Nom de la nouvelle piece
                    </Form.Label>
                    <Col sm={10}>
                            <Form.Control name="name" change={handleChange} type="text" placeholder="pieceXXX" required/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Quantite
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="quantity" value="0" change={handleChange} type="number" placeholder="0" required/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="success" type="submit">Creer la piece</Button>
                        </Col>
                </Form.Group>
            </Form>
        </section>
    )
}

/**
 * <div>
                <form onSubmit={handleSubmit}>
                    <InputLabel name="name" change={handleChange} type="text" label="Nom de la nouvelle piece" placeholder="pieceXXX" required/>
                    <InputLabel name="quantity" change={handleChange} value="0" type="number" label="Quantite" placeholder="0" required/>
                    <button>Creer la piece</button>
                </form>
            </div>
 */