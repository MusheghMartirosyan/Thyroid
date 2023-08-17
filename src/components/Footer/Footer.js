import Socials from "../Socials/Socials"
import "./Footer.css"

const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="about">
                <h3>ABOUT IR THYROID</h3>
                <ul>
                    <li>What is thrioid gland</li>
                    <li>What is thrioid gland</li>
                    <li>What is thrioid gland</li>
                    <li>What is thrioid gland</li>
                    <li>What is thrioid gland</li>
                    <li>What is thrioid gland</li>
                </ul>
            </div>
            <div className="solutions">
                <h3>IR THYROID SOLUTIONS</h3>
                <ul>
                    <li>IR treatment</li>
                    <li>Ablation</li>
                    <li>Biopsy</li>
                    <li>Useful articles</li>
                    <li>Doctors</li>
                    <li>Gallery</li>
                    <li>Where to find us</li>
                    <li>Submit my medical records</li>
                </ul>
            </div>
            <div className="contact">
                <h3>CONTACT US</h3>
                <span className="mail">info@domen.am</span> <br />
                <span className="tel">Tel: +374 11 000 000</span>
                <Socials />
            </div>
        </div>
        <div className="footer-reserved">© 2023 - All Rights Reserved</div>
            </>
    )
}

export default Footer