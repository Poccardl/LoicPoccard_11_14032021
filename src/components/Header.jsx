import React from 'react'
import logo from '../assets/svg/logo.svg'
import { Link } from 'react-router-dom'

export class Header extends React.Component {

    render () {
        return (
            <>
            <header>
                <img src={logo} alt="Kasa logo" className="logo"/>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Home" className="marker">ACCEUIL</Link>
                        </li>
                        <li>
                            <Link to="/About" className="marker">A PROPOS</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            </>
            )
    }
}