import { useState } from "react";
import { getPieceIdByName, insertPieceCommerciale } from "../../services/PieceApi";
import InputLabel from "../form/inputLabel";
import { 
    Button, 
    Form, 
    Row,
    Col 
} from "react-bootstrap";

export default function CreatePiecePopup(props) {
    
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
        console.log(props)
        insertPieceCommerciale(piece)
        let dataId = getPieceIdByName(props)
    }
    
    return(
        <section>
            <h3>
                Creer une nouvelle piece commerciale
            </h3>
            <div>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2} htmlFor="name">
                        Nom de la nouvelle piece
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="name" change={handleChange} type="text" placeholder="pieceXXX" required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2} htmlFor="designation">
                        Nom commercial de la nouvelle piece
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control  name="designation" change={handleChange} type="text" placeholder="pieceXXX" required/>
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2}  htmlFor="quantity">
                        Quantite
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="quantity" change={handleChange} type="number" placeholder="0" required/>
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Form.Label column sm={2} htmlFor="price">
                        Prix
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="price" change={handleChange} type="number" placeholder="0.00" step="0.01"/>
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="success" type="submit">Creer la piece</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </section>
    )
}

/**
 * <section>
            <h3>
                Creer une nouvelle piece commerciale
            </h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <InputLabel name="name" change={handleChange} type="text" label="Nom de la nouvelle piece" placeholder="pieceXXX" required/>
                    <InputLabel name="designation" change={handleChange} type="text" label="Nom commercial de la nouvelle piece" placeholder="pieceXXX" required />
                    <InputLabel name="quantity" change={handleChange} value="0" type="number" label="Quantite" placeholder="0" required/>
                    <InputLabel name="price" change={handleChange} value="0.00" type="number" label="Prix" placeholder="0.00" step="0.01" />
                    <Button variant="success">Creer la piece</Button>
                </form>
            </div>
        </section>
 */
