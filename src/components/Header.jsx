import React from 'react'
import logo from '../assets/svg/logo.svg'
import { NavLink } from 'react-router-dom'

export class Header extends React.Component {

    render () {
        return (
            <>
            <header>
                <img src={logo} alt="Kasa header logo"/>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/Home" activeClassName="current_link" className="marker">ACCEUIL</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" activeClassName="current_link" className="marker">A PROPOS</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            </>
            )
    }
}