import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink to="./#" className={'navbar-brand'}>Mo. <span>Alaskari</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to="./" className={'nav-link'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="./Aboutme" className={'nav-link'}>About me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="./Resume" className={'nav-link'}>Resume</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="./Skills" className={'nav-link'}>Skills</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="./Projects" className={'nav-link'}>Projects</NavLink>
                            </li>

                            {/*  <li className="nav-item dropdown">
                                <NavLink to="./#" className={'nav-link dropdown-toggle'} role="button" data-bs-toggle="dropdown" aria-expanded="false">others</NavLink>
                             
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink to="./" className={'dropdown-item'}>Action</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="./" className={'dropdown-item'}>Action</NavLink>
                                    </li>
                                </ul>
   
                            </li> */ }
                            <li className="nav-item">
                                <NavLink to="./Contact" className={'nav-link'}>Contact</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header