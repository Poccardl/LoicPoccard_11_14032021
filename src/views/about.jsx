import React from 'react'

// Components import
import { AboutBanner } from '../components/AboutBanner.jsx'

// Containers import
import { Collapse } from '../containers/Collapse.jsx'

export class About extends React.Component {

    render () {
        return (
            <>
            <section className="m_20">
                <AboutBanner />
                <Collapse />
            </section>
            </>
            )
    }
}