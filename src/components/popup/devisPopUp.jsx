import { event } from "jquery";
import { useEffect, useState } from "react";
import { Row, Form, Button, Col, Table } from "react-bootstrap";
import { getAllPiecesCommerciale, getAllPiecesExterieure, getAllPiecesIntermediaire } from "../../services/PieceApi";

export default function DevisPopup({pieceList, setPieceList}) {

    const [piece, setPiece] = useState([])

    const [piecesCommerciale, setPiecesCommerciale] = useState([])
    const [piecesIntermediaire, setPiecesIntermediaire] = useState([])
    const [piecesExterieure, setPiecesExterieure] = useState([])

    console.log(pieceList)

    const piecesCommercialeTr = []
    const piecesIntermediaireTr = []
    const piecesExterieureTr = []

    let quantity = null

    useEffect(async () => {
        const piecesCommercialeData = await getAllPiecesCommerciale()
        const piecesIntermediaireData = await getAllPiecesIntermediaire()
        const piecesExterieureData = await getAllPiecesExterieure()

        if(piecesCommercialeData) {
            setPiecesCommerciale(piecesCommercialeData)
        }
        if(piecesIntermediaireData) {
            setPiecesIntermediaire(piecesIntermediaireData)
        }
        if(piecesExterieureData) {
            setPiecesExterieure(piecesExterieureData)
        }
    }, [])

    const handleAjouterPiece = (object) => {
        console.log("Hello")
        console.log(object)
        pieceList.push(object)
        
    }

    const handleChangeQuantite = (event) => {
        quantity = event.currentTarget.value
    } 

    for(let data in piecesCommerciale) {
        piecesCommercialeTr.push(
            <>
                <tr>
                    <th>{piecesCommerciale[data].name}</th>
                    <th>
                        <Form>
                            <Form.Label htmlFor="quantity">Quantite</Form.Label>
                            <Form.Control onChange={handleChangeQuantite} name="quantity" type="number" placeholder="0" required/>    
                        </Form>
                    </th>
                    <th onClick={() => handleAjouterPiece(piecesCommerciale[data])}>Ajouter</th>
                </tr>
            </>
        )
    }
    for(let data in piecesIntermediaire) {
        piecesIntermediaireTr.push(
            <>
                <tr>
                    <th>{piecesIntermediaire[data].name}</th>
                    <th>
                        <Form>
                            <Form.Label htmlFor="quantity">Quantite</Form.Label>
                            <Form.Control onChange={handleChangeQuantite} name="quantity" type="number" placeholder="0" required/>    
                        </Form>
                    </th>
                    <th onClick={() => handleAjouterPiece(piecesIntermediaire[data])}>Ajouter</th>
                </tr>
            </>
        )
    }
    for(let data in piecesExterieure) {
        piecesExterieureTr.push(
            <>
                <tr>
                    <th>{piecesExterieure[data].name}</th>
                    <th>
                        <Form>
                            <Form.Label htmlFor="quantity">Quantite</Form.Label>
                            <Form.Control onChange={handleChangeQuantite} name="quantity" type="number" placeholder="0" required/>    
                        </Form>
                    </th>
                    <th onClick={() => handleAjouterPiece(piecesExterieure[data])}>Ajouter</th>
                </tr>
            </>
        )
    }

    return(
        <>
            <h5>
                Devis

                <div>
                    <Table>
                        <tbody>
                            {piecesCommercialeTr}
                            {piecesIntermediaireTr}
                            {piecesExterieureTr}
                        </tbody>
                    </Table>


                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label>
                                Delai de livraison en jour
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" placeholder="1" required/>
                            </Col>
                        </Form.Group>
        
                        <Button variant="secondary">Ajouter le delai</Button>
                    </Form>
                </div>
            </h5>
            
        </>
    )
}