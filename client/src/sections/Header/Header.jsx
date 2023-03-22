import './Header.css'
import { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { NavItem } from '../../components/indexComponents'

const Header = () => {

    const [show, setSchow] = useState(false)

    const toggler = () => {
        setSchow(!show)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="./Home" className={'navbar-brand'} >mo.<span>alaskari</span></Link>

                    <div className="nav-togller burger-menu " onClick={toggler} >
                        <span className={show ? 'nav-icon menuactive' : "nav-icon "}></span>
                    </div>
                    <nav className={show ? 'navbar-collapse' : "navbar-collapse collapse"} >
                        <ul className="navbar-nav ms-auto">
                            <NavItem>
                                <NavLink to="./Home" className={'nav-link'} onClick={toggler} >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="./Aboutme" className={'nav-link'} onClick={toggler}>About me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="./Resume" className={'nav-link'} onClick={toggler}>Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="./Skills" className={'nav-link'} onClick={toggler}>Skills</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="./Projects" className={'nav-link'} onClick={toggler}>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="./Contact" className={'nav-link'} onClick={toggler}>Contact</NavLink>
                            </NavItem>


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
                        </ul>
                    </nav>
                </div>
            </nav>
        </>
    )
}

export default Header