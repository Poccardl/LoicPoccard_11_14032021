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
        return (
            <>
            <div className="lodging_banner">
                <img className="left_icon" src={left_icon} alt="left" onClick={() => (this.switch("left"))}/>
                <img src={picture} alt=""/>
                <img className="right_icon" src={right_icon} alt="right" onClick={() => (this.switch("right"))}/>
            </div>
            </>
        )
    }

}