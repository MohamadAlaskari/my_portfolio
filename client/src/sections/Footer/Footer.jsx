import './Footer.css'
const Footer = () => {

    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer>
            <div className="footer-container">
                © {currentYear} Mohamad Alaskari. All rights reserved
            </div>
        </footer>
    )
}

export default Footer