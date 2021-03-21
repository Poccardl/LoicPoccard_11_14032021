import React from 'react'

// Components import
import { AboutBanner } from '../components/AboutBanner.jsx'

// Containers import
import { Collapse } from '../containers/Collapse.jsx'

// toolbox import
import AboutData from '../toolbox/aboutData.class.js'


export class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: AboutData.getAboutData()
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