import React from 'react'

// Components import
import { CollapseTop } from '../components/CollapseTop.jsx'
import { CollapseContent } from '../components/CollapseContent.jsx'

export class Collapse extends React.Component {

    render() {
        let data = this.props.scaleValue
        return (
            <>
            {data.map((data, index) =>(
                <div key={`${index}_collapse`} className="collapse">
                    <div key={`${index}_collapse_top`} className="collapse_top">
                        <CollapseTop scaleValue={data.title}/>
                    </div>
                    <div key={`${index}_content`} className="collapse_content">
                        <CollapseContent scaleValue={data.content}/>
                    </div>
                </div>
            ))}
            </>
        )
    }
}