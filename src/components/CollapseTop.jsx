import React from 'react'

// svg import
import upper_icon from '../assets/svg/chevron-up-solid.svg'

// Components import
import { CollapseContent } from '../components/CollapseContent.jsx'

export class CollapseTop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    callActiveCollapse() {
        if (this.state.active) {
            this.setState({active: false})
        }
        else {
            this.setState({active: true})
        }
    }

    render() {
        return (
            <>
            <div className="collapse_top">
                <p>{this.props.title}</p>
                <img src={upper_icon} alt="Arrow icon" className="upper_icon" onClick={() => (this.callActiveCollapse())}/>
            </div>

            <div className={this.state.active ? "collapse_content" : "collapse_content__active"}>
                <CollapseContent content={this.props.content}/>
            </div>
            </>
        )
    }
}