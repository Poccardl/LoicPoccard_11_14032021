import React from 'react'

// svg import
import upper_icon from '../assets/svg/chevron-up-solid.svg'

export class CollapseTop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    callActiveCollapse() {
        console.log("callActiveCollapse()")
        if (this.state.active) {
            this.setState({active: false})
        }
        else {
            this.setState({active: true})
        }
        console.log("Value", this.state.active)

    }

    render() {
        return (
            <>
            <p>{this.props.scaleValue}</p>
            <img src={upper_icon} alt="Arrow icon" className="upper_icon" onClick={() => (this.callActiveCollapse())}/>
            </>
        )
    }
}