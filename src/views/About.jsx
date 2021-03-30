import React from 'react'

// Components import
import { AboutBanner } from '../components/AboutBanner.jsx'
import { Collapse } from '../components/Collapse.jsx'

// Data import
import Collapses from '../data/collapse.json'


export class About extends React.Component {

    render () {
        let collapse_data = Collapses
        return (
            <>
            <section className="m_20">
                <AboutBanner />
                {collapse_data.map((collapse_data, index) =>(
                    <Collapse key={`${index}_collapse`} scaleValue={collapse_data}/>
                ))}
            </section>
            </>
            )
    }
}
