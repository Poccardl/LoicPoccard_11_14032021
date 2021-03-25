import React from 'react'

export class CollapseContent extends React.Component {

    render() {
        let content = this.props.content
        return (
            <>
            {typeof content === 'object' ? <ul>{content.map((content, index) =>(
                <li key={`${index}_tag`}>{content}</li>
            ))}</ul> : <p>{content}</p>}
            </>
        )
    }
}