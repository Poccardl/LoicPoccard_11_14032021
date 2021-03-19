import React from 'react'
import image from '../assets/img/mountains.png'

export class AboutBanner extends React.Component {

    render() {
        return (
            <>
            <div className="banner">
                <div className="darken_filter"></div>
                <img src={image} alt="Mountains" className="mountains"/>
            </div>
            </>
        )
    }
}