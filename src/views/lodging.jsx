import React from 'react'

// data import
import data from '../data/data.json'

export class Lodging extends React.Component {

    getApartmentData() {
        console.log("slug :", this.props.match.params.slug)
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
        console.log("apartment_data", apartment_data)
        return (
            <>
            LODGING
            </>
            )
    }
}