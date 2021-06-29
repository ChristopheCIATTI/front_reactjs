import { useEffect, useState } from "react";
import { getAllType } from "../../services/PieceTypeTypeApi";
import { Link } from "react-router-dom"

export default function NewPartPopUp() {
    
    const [type, setType] = useState([])
    const li = []

    useEffect(async () => {
        const data = await getAllType()
        if(data) {
            setType(data)
        }
    })

    for(let obj in type) {
        
        li.push(<li><Link key={'/newpart/' + type[obj].pieceType} to={{pathname: '/newpart/' + type[obj].pieceType}}> {type[obj].pieceType}</Link></li>)
    }

    return(
        <section>
            <h4>Type de piece</h4>
            <ul>
                {li}
            </ul>
        </section>
    );
}
