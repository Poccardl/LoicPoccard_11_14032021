import React from 'react'
import { Link } from 'react-router-dom'



export class Error404 extends React.Component {

    render () {
        console.log(this.props)
        return (
            <>
            <div className="error404">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <div className="mb_100">
                    <Link to="/Home" className="a">Retourner sur la page d'accueil</Link>
                </div>
            </div>
            </>
            )
    }
}