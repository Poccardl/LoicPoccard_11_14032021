import React from 'react'
import image from '../assets/img/riviera.png'

export class Banner extends React.Component {

    render() {
        return (
            <>
            <div className="banner">
                <div className="darken_filter"></div>
                <img src={image} alt="" className="riviera"/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            </>
        )
    }
}