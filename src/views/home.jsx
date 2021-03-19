import React from 'react'

// Containers import
import { Gallery } from '../containers/Gallery.jsx'

// Composents import
import { HomeBanner } from '../components/HomeBanner.jsx'

export class Home extends React.Component {

    render () {
        return (
            <>
            <section className="m_20">
                <HomeBanner />
                <Gallery />
            </section>
            </>
        )
    }
}