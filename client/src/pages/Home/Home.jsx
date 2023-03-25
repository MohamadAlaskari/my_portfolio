import './Home.css'
import { PrimaryButton } from '../../components/indexComponents'
import Profilebild from '../../assest/images/Profilebild.png'



const Home = () => {
  return (
    <div className="container">
      <div className="Home-section">
        <div className="row Home-section-row">
          <div className="col-md-6 Home-section-col pb-4">
            <div className="img-container">

              <img src={Profilebild} alt="th" />
            </div>

          </div>
          <div className="col-md-6">
            <div className="home-content">
              <h2 className="title">Mohamad Alaskari</h2>
              <p>
                Designer Web & Grafik
              </p>
              <PrimaryButton  >
                Resume
              </PrimaryButton>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home