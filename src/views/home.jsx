import React from 'react'

// Containers import
import { Gallery } from '../containers/Gallery.jsx'

// Composents import
import { Banner } from '../components/Banner.jsx'

export class Home extends React.Component {

    render () {
        return (
            <>
            <section className="m_20">
                <Banner />
                <Gallery />
            </section>
            </>
        )
    }
}