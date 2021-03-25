import React from 'react'

// Components import
import { CollapseTop } from '../components/CollapseTop.jsx'
// import { CollapseContent } from '../components/CollapseContent.jsx'

export class Collapse extends React.Component {

    render() {
        let data = this.props.scaleValue
        return (
            <>
            {data.map((data, index) =>(
                <div key={`${index}_collapse`} className="collapse">
                    <CollapseTop content={data.content}  title={data.title}/>
                </div>
            ))}
            </>
        )
    }
}