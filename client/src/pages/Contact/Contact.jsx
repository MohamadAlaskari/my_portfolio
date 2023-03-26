import './Contact.css'
import { Link } from 'react-router-dom'
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaXing } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="container">
            <div className="contact-content">
                <h2 className="section-title">Connect with me</h2>
                <h4 className='title'>Mo Alaskari</h4>
                <a href="mailto:kontakt@mohamadalaskari.de" >kontakt@mohamadalaskari.de</a> 
                <br />
                <Link to="http://www.mohamadalaskari.de">www.mohamadalaskari.de</Link>

                <div className="socialmedia-section">
                    <p>Socials</p>
                    <div className="socialmedia-container">
                        <Link to="https://www.linkedin.com/in/mohamad-alaskari-17238a123/" className='socialitem' ><FaLinkedinIn /></Link>
                        <Link to="https://www.xing.com/profile/Mohamad_Alaskari/cv" className='socialitem'><FaXing /></Link>
                        <Link to="https://github.com/MohamadAlaskari" className='socialitem'><BsGithub /></Link>
                        <Link to="https://www.instagram.com/mo.alaskari/" className='socialitem'><BsInstagram /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact