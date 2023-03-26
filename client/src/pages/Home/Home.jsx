import './Home.css'
import { PrimaryButton } from '../../components/indexComponents'
import Profilebild_01 from '../../assest/images/Profilebild_01.png'



const Home = () => {
  return (
    <div className="container">
      <div className="row Home-section-row">
        <div className="col-md-6 Home-section-col pb-4">
          <div className="img-container">

            <img src={Profilebild_01} alt="th" />
          </div>

        </div>
        <div className="col-md-6">
          <div className="home-content">
            <h2 className="title">Mohamad Alaskari</h2>
            <p>
              Designer Web & Grafik
            </p>
            <PrimaryButton path='contact'>
              Resume
            </PrimaryButton>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home