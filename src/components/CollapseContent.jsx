import React from 'react'

export class CollapseContent extends React.Component {

    render() {
        let data = this.props.scaleValue
        return (
            <>
            {typeof data === 'object' ? <ul>{data.map((data, index) =>(
                <li key={`${index}_tag`}>{data}</li>
            ))}</ul> : <p>{data}</p>}
            </>
        )
    }
}