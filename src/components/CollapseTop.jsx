import React from 'react'
import upper_icon from '../assets/svg/chevron-up-solid.svg'

export class CollapseTop extends React.Component {

    render() {
        return (
            <>
            <p>Fiabilité</p>
            <img src={upper_icon} alt="Arrow icon" className="upper_icon"/>
            </>
        )
    }
}