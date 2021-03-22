import React from 'react'

// Components import
import { Card } from '../components/Card.jsx'

// data import
import data from '../data/data.json'

export class Gallery extends React.Component {

    render() {
        return (
            <>
            <section className="gallery">
                {data.map ((data, index)=> (
                    <Card key={index} id={data.id} title={data.title}/>
                ))}
            </section>
            </>
        )
    }
}