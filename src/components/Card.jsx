import React from 'react'
import { Link } from 'react-router-dom'

export class Card extends React.Component {

    render() {
        return (
            <>
            <Link to={`/Lodging/${this.props.id}`}>
                <div className="card">
                    <h2>{this.props.title}</h2>
                </div>
            </Link>
            </>
        )
    }
}