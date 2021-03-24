import React from 'react'

// Components import
import { AboutBanner } from '../components/AboutBanner.jsx'

// Containers import
import { Collapse } from '../containers/Collapse.jsx'

// Data import
import Collapses from '../data/collapse.json'


export class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: Collapses
        }
    }

    render () {
        return (
            <>
            <section className="m_20">
                <AboutBanner />
                <Collapse scaleValue={this.state.data}/>
            </section>
            </>
            )
    }
}