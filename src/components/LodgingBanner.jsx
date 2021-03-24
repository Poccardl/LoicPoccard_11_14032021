import React from 'react'

export class LodgingBanner extends React.Component {

    render() {
        return (
            <>
            <div className="lodging_banner">
                <img src={this.props.cover} alt=""/>
            </div>
            </>
        )
    }

}