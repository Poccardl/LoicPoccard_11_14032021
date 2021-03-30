import React from 'react'

// Components import
import { LodgingBanner } from '../components/LodgingBanner.jsx'
import { Collapse } from '../components/Collapse.jsx'

// Containers import
import { LodgingHeader } from '../containers/LodgingHeader.jsx'

// Data import
import data from '../data/data.json'

export class Lodging extends React.Component {

    getApartmentData() {
        let id = this.props.match.params.slug
        let apartment_data = ""
        for (let element of data) {
            if (element["id"] === id) {
                apartment_data = element
                break
            }
        }
        return apartment_data
    }

    render () {
        let apartment_data = this.getApartmentData()
        let collapse_data = [{title: "Description", content: apartment_data.description}, {title: "Equipements", content: apartment_data.equipments}]
        return (
            <>
            <section className="m_20">
                <LodgingBanner pictures={apartment_data.pictures}/>
                <LodgingHeader title={apartment_data.title} location={apartment_data.location} host={apartment_data.host} tags={apartment_data.tags} rating={apartment_data.rating}/>
                <div className="lodging_content">
                    {collapse_data.map((collapse_data, index) =>(
                        <Collapse key={`${index}_collapse`} scaleValue={collapse_data}/>
                    ))}
                </div>
            </section>
            </>
            )
    }
}
