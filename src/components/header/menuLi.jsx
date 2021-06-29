import { Link } from "react-router-dom";

export default function MenuLi(props) {
    return(
        <li className="nav-item">
            {props.name}
        </li>
    )
}
//<Link className="nav-link" to={props.url}>{props.name}</Link>