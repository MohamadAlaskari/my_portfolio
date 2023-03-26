import { Link } from "react-router-dom"
import './Buttons.css'
const PrimaryButton = (props) => {
    return (

        <Link to={"/Contact"} className="button button-primary">
            {props.children}
        </Link>

    )
}


const SecondaryButton = (props) => {
    return (
        <div >
            <Link to="/Contact" className="button button-secondary">
                {props.children}
            </Link>
        </div>
    )
}
export default PrimaryButton
export { SecondaryButton }