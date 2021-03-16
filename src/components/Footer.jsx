import React from 'react'
import logo from '../assets/svg/footer_logo.svg'

export class Footer extends React.Component {

    render () {
        return (
            <>
            <footer>
                <img src={logo} alt="Kesa footer logo" className="footer_logo"/>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
            </>
            )
    }
}