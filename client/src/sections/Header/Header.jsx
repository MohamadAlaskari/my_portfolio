import './Header.css'
import { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { NavItem } from '../../components/indexComponents'

const Header = () => {

    const [navActive, setNavActive] = useState(false)

    const toggler = () => {
        setNavActive(!navActive)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link to="./Home" className={'navbar-brand'} >mo <span>alaskari</span></Link>

                    <div className="d-lg-none burger-menu " onClick={toggler} type="button" >
                        <span className={navActive ? ' nav-icon menuactive' : "nav-icon "}></span>
                    </div>
                    <div className={navActive ? 'd-lg-inline-flex nav-container ' : "d-lg-inline-flex nav-container nav-show "} >
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
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header