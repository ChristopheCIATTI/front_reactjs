import { useEffect, useState } from "react"
import { getAllPiecesExterieure, getAllPiecesIntermediaire, getPieceExterieureById, getPieceIntermedaireById, getPieceIntermediairePieceExterieureById, getPieceIntermerPieceIntermdaireNyId, getPIPieceIntermedaireById } from "../../services/PieceApi"

export default function ReadPieceIntePopup(piece) {
    
    const [pieceIntermedaireInte, setPieceIntermedaireInte] = useState([])
    const [pieceIntermedaireExte, setPieceIntermedaireExte] = useState([])

    const [piecesIntermediaire, setPiecesIntermediaire] = useState([])
    const [piecesExterieure, setPiecesExterieure] = useState([])

    const [piidsArray, setPiidsArray] = useState([])
    const [piedsArray, setPiedsArray] = useState([])
    const piidArray = []
    const piedArray = []

    const pieceIntermedaireName = []
    const pieceExterieureName = []

    const pieceIntermedaireTr = []
    const pieceExterieureTr = []

    useEffect(async () => {
        const pieceIntermedaire = await getPieceIntermerPieceIntermdaireNyId(piece)
        const pieceExterieure = await getPieceIntermediairePieceExterieureById(piece)
        setPieceIntermedaireInte(pieceIntermedaire)
        setPieceIntermedaireExte(pieceExterieure)
        if(pieceIntermedaire.length > 0) {
            for(let piece in pieceIntermedaire) {
                piidArray.push(pieceIntermedaire[piece])
            }
            for(let piece in piidArray) {
                const response = await getPieceIntermedaireById(piidArray[piece])
                setPiidsArray(response)
            }
        }
        if(pieceExterieure.length > 0) {
            for(let piece in pieceExterieure) {
                piedArray.push(pieceExterieure[piece])
            }
            for(let piece in piedArray) {
                const response = await getPieceExterieureById(piedArray[piece])
                setPiedsArray(response)
            }
        }
    }, [])

    useEffect(async () => {
        const pieceIntermedaire = await getAllPiecesIntermediaire()
        const pieceExterieure = await getAllPiecesExterieure()
        if(pieceIntermedaire) {
            setPiecesIntermediaire(pieceIntermedaire)
        }
        if(pieceExterieure) {
            setPiecesExterieure(pieceExterieure)
        }
    }, [])

    for(let piece in piecesIntermediaire) {
        pieceIntermedaireName.push(piecesIntermediaire[piece].name)
    }
    for(let piece in piecesExterieure) {
        pieceExterieureName.push(piecesExterieure[piece].name)
    }

    function getPredictionPieceInte(value) {
        return pieceIntermedaireName.filter(
            item => item.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    }

    function getPredictionPieceExte(value) {
        return pieceExterieureName.filter(
            item => item.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    }

    for(let piece in piidArray) {
        pieceIntermedaireTr.push(
            <>
                <th>Nom de la piece intermediaire</th>
                <td>{piidArray[piece].name}</td>
                <th>Quantite</th>
                <td>{piidArray[piece].quantity}</td>
                <td>Editer</td>
                <td>Supprimer</td>
            </>
        )
    }
    for(let piece  in piedArray) {
        pieceExterieureTr.push(
            <>
                <th>Nom de la piece exterieure</th>
                <td>{piedArray[piece].name}</td>
                <th>Quantity</th>
                <td>{piedArray[piece].quantity}</td>
                <td>Editer</td>
                <td>Supprimer</td>
            </>
        )
    }
 
    return(
        <section>
            <h3>
                    Visualisation piece
            </h3>
            <div>
            <table>
                <tbody>
                    <th>Nom de la piece</th>
                    <td>{piece.name}</td>
                    <th>Quantite</th>
                    <td>{piece.quantity}</td>
                </tbody>
            </table>
            </div>
            <div>
                <div>
                    <h3>
                        Ajouter une piece intermediaire
                        <form>
                            <label></label>
                            <input/>
                            <label></label>
                            <input/>
                        </form>
                    </h3>
                </div>
                <div>
                    <h3>
                        Ajouter une piece Exterieure
                        <form>
                            <label></label>
                            <input/>
                            <label></label>
                            <input/>
                        </form>
                    </h3>
                </div>
                <div>
                    <h3>
                        Piece intermedaire
                        <table>
                            <tbody>
                                {pieceIntermedaireTr}
                            </tbody>
                        </table>
                    </h3>
                </div>
                <div>
                    <h3>
                        Piece exterieure
                        <table>
                            <tbody>
                                {pieceExterieureTr}
                            </tbody>
                        </table>
                    </h3>
                </div>
            </div>
        </section>
    )
}