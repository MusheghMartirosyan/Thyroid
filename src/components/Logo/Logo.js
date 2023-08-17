import logoImg from "../../images/logo.png"
import Socials from "../Socials/Socials"
import "./Logo.css"

const Logo = () => {
    return (
        <div className="logo">
            <img src={logoImg} alt="logo" />
            <Socials />
        </div>
    )
}

export default Logo