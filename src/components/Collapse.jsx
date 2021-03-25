import React from 'react'

// svg import
import upper_icon from '../assets/svg/chevron-up-solid.svg'
import lower_icon from '../assets/svg/chevron-down-solid.svg'

export class Collapse extends React.Component {

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
        let data = this.props.scaleValue
        let content = data.content
        return (
            <>
            <div className="collapse">
                <div className="collapse_top">
                    <p>{data.title}</p>
                    <img src={this.state.active ? upper_icon : lower_icon} alt="Arrow icon" className="upper_icon" onClick={() => (this.callActiveCollapse())}/>
                </div>
                <div className={this.state.active ? "collapse_content" : "collapse_content__active"}>
                    {typeof content === 'object' ? <ul>{content.map((content, index) =>(
                        <li key={`${index}_tag`}>{content}</li>
                    ))}</ul> : <p>{content}</p>}
                </div>
            </div>
            </>
        )
    }
}