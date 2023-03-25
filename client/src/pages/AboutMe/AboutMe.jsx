import "./AboutMe.css"
import { PrimaryButton } from "../../components/indexComponents"
import Profilebild from '../../assest/images/Profilebild.png'

const AboutMe = () => {
    return (
        <div className="container">
            <div className="aboutme-section">

                <div className="row py-5">
                    <div className=" col-md-6">
                        <h2 className="title">About Me</h2>
                        <p>
                            Welcome to my website! I'm Mohamad, a 27-year-old student studying
                            International Media Informatics and trained in Business Informatics. As
                            a passionate web developer and graphic designer, I create high-quality
                            websites, brochures, and flyers with creativity and user-friendliness.
                            I'm motivated to constantly improve my skills to meet my clients'
                            satisfaction. Contact me to use my services
                        </p>
                        <PrimaryButton>
                            Hire me
                        </PrimaryButton>

                    </div>
                    <div className=" col-md-6">
                        <div className="img-container">
                            <img src={Profilebild} alt="fzk" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
