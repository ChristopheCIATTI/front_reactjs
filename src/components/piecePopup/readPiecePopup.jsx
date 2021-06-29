import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { 
    getAllPiecesExterieure, 
    getAllPiecesIntermediaire, 
    getPieceCommercialePieceExterieureById, 
    getPieceCommercialePieceIntermedaireById, 
    getPieceExterieureById, 
    getPieceIntermedaireById, 
    inserPieceCommercialePieceExterieure, 
    inserPieceCommercialePieceIntermediaire,
    getPieceCommercialeMPById, 
    getMatiereById,
    getAllMP} from "../../services/PieceApi"
import EditInput from "../form/editInput"
import EditQuantityPieceInte from "./EditQuantityPieceInte"

const INPUT_TIMEOUT = 250

export default function ReadPiecePopup(piece) {
    
    const [pieceCommercialIntermediare, setPieceCommercialIntermediare] = useState([])
    const [pieceCommercialExterieure, setPieceCommercialExterieure] = useState([])
    const [piecesIntermediaire, setPiecesIntermediaire] = useState([])
    const [piecesExterieure, setPiecesExterieure] = useState([])
    const [pieceCommercialeMP, setPieceCommercialeMP] = useState([])
    const [matierePremiere, setMatierePremiere] = useState([])
    //const [piecesIntermediairePrediction, setPiecesIntermediairePrediction] = useState({value: "", predictions: []})
    //const [piecesIntermediairePredictionValue, setPiecesIntermediairePredictionValue] = useState({value: ""})
    const [piecesIntermediairePrediction, setPiecesIntermediairePrediction] = useState({predictions: []})
    const [piecesExterieurePrediction, setPiecesExterieurePrediction] = useState({predictions: []})
    const [MPPrediction, setMPPrediction] = useState({predictions: []})
    const [addPieceIntermediaire, setAddPieceIntermediaire] = useState({pieceId: null, subpartId: null, quantity: 0})
    const [addPieceExterieure, setAddPieceExterieure] = useState({pieceId: null, subpartId: null, quantity: 0})
    const [addMP, setAddMP] = useState({pieceId: null, matierePremiereId: null, quantity: 0})
    const [addPieceInteName, setAddPieceInteName] = useState({name: ""})
    const [addPieceExteName, setAddPieceExteName] = useState({name: ""})
    const [addMPName, setAddMPName] = useState({name: ""}) 
    const [pcidArray, setPcidArray] = useState([])
    const [pcedArray, setPcedArray] = useState([])
    const [pcsmpArray, setPcsmpArray] = useState([])
    
    const [popEditQuantityPieceInte, setPopEditQuantityPieceInte] = useState(false)
    const editQuantityPieceInteToTrue = () => {
        setPopEditQuantityPieceInte(true)
    }
    const editQuantityPieceInteToFalse = () => {
        setPopEditQuantityPieceInte(false)
    }
    
    const pcidsArray= []
    const pcedsArray = []
    const pcmpArray = []
    const pieceIntermedaireTr = []
    const pieceExterieureTr = []
    const pieceMPTr = []
    const pieceIntermedaireName = []
    const pieceExterieureName = []
    const MPName = []

    useEffect(async () => {
        const pieceCommercialeIntermedaireData = await getPieceCommercialePieceIntermedaireById(piece)
        const pieceCommercoaleExterieureData = await getPieceCommercialePieceExterieureById(piece)
        const pieceCommercialeMPData = await getPieceCommercialeMPById(piece)
        setPieceCommercialIntermediare(pieceCommercialeIntermedaireData)
        setPieceCommercialExterieure(pieceCommercoaleExterieureData)
        setPieceCommercialeMP(pieceCommercialeMPData)
        if(pieceCommercialeIntermedaireData.length > 0) {
            for(let piece in pieceCommercialeIntermedaireData) {
                pcidsArray.push(pieceCommercialeIntermedaireData[piece])
            }
            for(let piece in pcidsArray) {
                const response = await getPieceIntermedaireById(pcidsArray[piece])
                setPcidArray(response)
            } 
        }
        if(pieceCommercoaleExterieureData.length > 0) {
            for(let piece in pieceCommercoaleExterieureData) {
                pcedsArray.push(pieceCommercoaleExterieureData[piece])
            }
            console.log(piece)
            for(let piece in pcedsArray) {
                const response = await getPieceExterieureById(pcedsArray[piece])
                setPcedArray(response)
            }
        }
        if(pieceCommercialeMPData.length > 0) {
            for(let matiere in pieceCommercialeMPData) {
                pcmpArray.push(pieceCommercialeMPData[matiere])
            }
            for (let matiere in pcmpArray) {
                const response = await getMatiereById(pcmpArray[matiere])
                setPcsmpArray(response)
            }
        }
    }, [])

    useEffect(async() => {
        const piecesIntermediaireData = await getAllPiecesIntermediaire()
        const piecesExterieureData = await getAllPiecesExterieure()
        const MPData = await getAllMP()
        if(piecesIntermediaireData) {
            setPiecesIntermediaire(piecesIntermediaireData)
        }
        if(piecesExterieureData) {
            setPiecesExterieure(piecesExterieureData)
        }
        if(MPData) {
            setMatierePremiere(MPData)
        }
    }, [])
    
    for(let piece in piecesIntermediaire) {
        pieceIntermedaireName.push(piecesIntermediaire[piece].name)
    }
    for(let piece in piecesExterieure) {
        pieceExterieureName.push(piecesExterieure[piece].name)
    }
    for(let matiere in pieceCommercialeMP) {
        MPName.push(pieceCommercialeMP[matiere])
    }

    function getPredictionPieceIntermediaire(value) {
        return pieceIntermedaireName.filter(
            item => item.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    }
    function getPredictionPieceExterieure(value) {
        return pieceExterieureName.filter(
            item => item.toLowerCase().indexOf(value.toLowerCase() !== -1))
    }
    function getPredictionMP(value) {
        return MPName.filter(
            item => item.toLowerCase().indexOf(value.toLowerCase() !== -1))
    }

    function deletePieceInte(piece) {
        console.log(piece.id)
    }
    
    const handeChangeAddPieceIntermediaire = (event) => {
        clearTimeout()
        const value = event.target.value
        const name = event.target.name
        const pieceId = piece.id
        setAddPieceIntermediaire({...addPieceIntermediaire, ['pieceId']: pieceId})
        if(name === "name") {
            setAddPieceInteName({...addPieceInteName, [name]: value})
        }
        if(name == "quantity") {
            setAddPieceIntermediaire({...addPieceIntermediaire, ['quantity']: value})
        }
        for(let pieces in piecesIntermediaire) {
            if(piecesIntermediaire[pieces].name === addPieceInteName.name) {
                let id = piecesIntermediaire[pieces].id
                setAddPieceIntermediaire({...addPieceIntermediaire, ['subpartId']: id})
            }
        }
        //setAddPieceIntermediaire({...addPieceIntermediaire, [name]: value})
        if(value.length > 0) {
            let timeout = setTimeout(() => {
                const prediction = getPredictionPieceIntermediaire(value)
                console.log(prediction)
                setPiecesIntermediairePrediction({predictions: prediction})
            }, INPUT_TIMEOUT)
        } 
        else {
            setPiecesIntermediairePrediction({"predictions": []})
        }
    }
    let dataPieceIntermedaire = Array.from(piecesIntermediairePrediction)

    function editQuantity() {
        return <EditInput/>
        //console.log("ok")
    }

    const handeChangeAddPieceExterieure = (event) => {
        clearTimeout()
        const value = event.target.value
        const name = event.target.name
        const pieceId = piece.id
        setAddPieceExterieure({...addPieceExterieure, ['pieceId']: pieceId})
        if(name === "name") {
            setAddPieceExteName({...addPieceExteName, [name]: value})
        }
        if(name == "quantity") {
            setAddPieceExterieure({...addPieceExterieure, ['quantity']: value})
        }
        for(let piece in piecesExterieure) {
            if(piecesExterieure[piece].name === addPieceExteName.name) {
                let id = piecesExterieure[piece].id
                console.log(id)
                setAddPieceExterieure({...addPieceExterieure, ['subpartId']: id})
            }
        }
        if(value.length > 0) {
            let timeout = setTimeout(() => {
                const prediction = getPredictionPieceExterieure(value)
                console.log(prediction)
                setPiecesExterieurePrediction({predictions: prediction})
            }, INPUT_TIMEOUT)
        }
        else {
            setPiecesExterieurePrediction({"predictions": []})
        }
    }

    const handleSubmitAddPieceIntermediaire = (event) => {
        event.preventDefault()
        let id = null
        for(let pieces in piecesIntermediaire) {
            if(piecesIntermediaire[pieces].name === addPieceInteName.name) {
                id = piecesIntermediaire[pieces].id
                //setAddPieceIntermediaire({["pieceId"]: piece.id})
                //setAddPieceIntermediaire({["subpartId"]: id})
            }
        }
        //id = piecesIntermediaire[piece].id = id piece inté
        //setAddPieceIntermediaire({...addPieceIntermediaire, ["pieceId"]: piece.id})
        //setAddPieceIntermediaire({...addPieceIntermediaire, ["subpartId"]: id})
        console.log(addPieceIntermediaire)
        inserPieceCommercialePieceIntermediaire(addPieceIntermediaire)
    }

    const handleSubmitAddPieceExterieure = (event) => {
        event.preventDefault()
        inserPieceCommercialePieceExterieure(addPieceExterieure)
    }

    const handeChangeAddMP = (event) => {
        clearTimeout()
        const value = event.target.value
        const name = event.target.name
        const pieceId = piece.id
        setAddMP({...addMP, ['pieceId']: pieceId})
        if(name === "name") {
            setAddMP({...addMP, [name]: value})
        }
        if(name == "quantity") {
            setAddMP({...addMP, ['quantity']: value})
        }
        for(let mp in pieceCommercialeMP) {
            if(pieceCommercialeMP[mp].name === addMPName.name) {
                let id = addMPName[piece].id
                console.log(id)
                setAddMP({...addMP, ['matierePremiereId']: id})
            }
        }
        if(value.length > 0) {
            let timeout = setTimeout(() => {
                const prediction = getPredictionMP(value)
                console.log(prediction)
                setMPPrediction({predictions: prediction})
            }, INPUT_TIMEOUT)
        }
        else {
            setMPPrediction({"predictions": []})
        }
    }

    const handleSubmitAdMP = (event) => {
        event.preventDefault()
        //inserMP(addPieceExterieure)
    }

    for(let piece in pcidArray) {
        console.log(pcidArray[piece])
        pieceIntermedaireTr.push(
            <>
            <th>Nom de la piece intermediaire</th>
            <td>{pcidArray[piece].name}</td>
            <th>Quantité</th>
            <td>{pcidArray[piece].quantiy}</td>
            <td onClick={setPopEditQuantityPieceInte}><button>Editer</button></td>
            <td><button onClick={deletePieceInte(pcidArray[piece])}>Supprimer</button></td>
            <Modal isOpen={editQuantity}>
            <   button onClick={editQuantityPieceInteToFalse}>X</button>
            <EditQuantityPieceInte
                //piece={pcidArray[piece]}
            />
            </Modal>
            </>
        )
    }
//onClick={editQuantity(pcidArray[piece])
    for(let piece in pcedArray) {
        console.log(pcedArray[piece].name)
        pieceExterieureTr.push(
            <>
            <th>Nom de la piece exterieure</th>
            <td>{pcedArray[piece].name}</td>
            <th onClick={editQuantity(pcedArray[piece])} >Quantité</th>
            <td onClick={editQuantity(pcedArray[piece])} >{pcedArray[piece].quantiy}</td>
            </>
        )
    }

    console.log(pcmpArray)
    for(let mp in pcmpArray) {
        console.log([pcmpArray[mp]])
        pieceMPTr.push(
            
        )
        /*pieceMPTr.push(

        )*/
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
                    <th>Nom commercial</th>
                    <td>{piece.designation}</td>
                    <th>Quantite</th>
                    <td>{piece.quantity}</td>
                    <th>Prix</th>
                    <td>{piece.price}</td>
                </tbody>
            </table>
            </div>
            <div>
                <div>
                    <h3>
                        Ajouter une piece intermediaire
                        <form onSubmit={handleSubmitAddPieceIntermediaire}>
                            <label htmlFor="name">Nom: </label>
                            <input name="name" type="text" defaultValue={piecesIntermediairePrediction.value} onChange={handeChangeAddPieceIntermediaire} placeholder="pieceXXX" required/>
                            <label htmlFor="quantity">Quantité</label>
                            <input name="quantity" type="number" defaultValue="0" onChange={handeChangeAddPieceIntermediaire} placeholder="0" required/>
                            <button>Ajouter!</button>
                        </form>
                        {dataPieceIntermedaire.map((item, index) => {
                                <span key={index + item}>{item}</span>
                            })}
                    </h3>
                </div>
                <div>
                    <h3>
                        Ajouter une piece Exterieure
                    
                    <form onSubmit={handleSubmitAddPieceExterieure}>
                        <label htmlFor="name">Nom: </label>
                        <input name="name" type="text" defaultValue={piecesIntermediairePrediction.value} onChange={handeChangeAddPieceExterieure} placeholder="pieceXXX" required/>
                        <label htmlFor="quantity">Quantité</label>
                        <input name="quantity" type="number" defaultValue="0" onChange={handeChangeAddPieceExterieure} placeholder="0" required/>
                        <button>Ajouter!</button>
                    </form>
                    </h3>
                </div>
                <div>
                    <h3>
                        Ajouter des matieres
                    </h3>
                    <form onSubmit={handleSubmitAdMP}>
                        <label htmlFor="name">Nom: </label>
                        <input name="name" type="text" defaultValue={pieceCommercialeMP.value} onChange={handeChangeAddMP} placeholder="blood" required/>
                        <label htmlFor="quantity">Quantité</label>
                        <input name="quantity" type="number" defaultValue="0" onChange={handeChangeAddMP} placeholder="0" required/>
                        <button>Ajouter!</button>
                    </form>
                </div>
            </div>
            <div>
                <h3>Piece intermedaire</h3>
                <table>
                    <tbody>
                        {pieceIntermedaireTr}
                    </tbody>
                </table>
            </div>
            <div>
                <h3>Piece exterieure</h3>
                <table>
                    <tbody>
                        {pieceExterieureTr}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
