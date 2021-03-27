import React from 'react'

// import svg
import left_icon from '../assets/svg/chevron-left-solid.svg'
import right_icon from '../assets/svg/chevron-right-solid.svg'

export class LodgingBanner extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }
    }

    switch(value) {
        let max_index = this.props.pictures.length
        let index = this.state.current
        if (value === "left") {
            index -= 1
        }
        else if (value === "right") {
            index += 1
        }
        if (index === max_index) {
            index = 0
        }
        else if (index < 0) {
            index = max_index -1
        }
        this.setState({current: index})
    }

    render() {
        let picture = this.props.pictures[this.state.current]
        let condition = this.props.pictures.length > 1
        return (
            <>
            <div className="lodging_banner">
                {condition ? <img className="left_icon" src={left_icon} alt="left" onClick={() => (this.switch("left"))}/> : ""}
                {condition ? <img className="right_icon" src={right_icon} alt="right" onClick={() => (this.switch("right"))}/> : ""}
                {condition ? <p className="index">{this.state.current + 1}/{this.props.pictures.length}</p> : ""}
                <img src={picture} alt=""/>
            </div>
            </>
        )
    }

}