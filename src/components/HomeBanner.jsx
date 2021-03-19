import React from 'react'
import image from '../assets/img/riviera.png'

export class HomeBanner extends React.Component {

    render() {
        return (
            <>
            <div className="home_banner">
                <div className="darken_filter"></div>
                <img src={image} alt="Riviera" className="riviera"/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            </>
        )
    }
}