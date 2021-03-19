import React from 'react'

import { CollapseTop } from '../components/CollapseTop.jsx'
import { CollapseContent } from '../components/CollapseContent.jsx'

export class Collapse extends React.Component {

    render() {
        return (
            <>
            <div className="collaspe">
                <div className="collapse_top">
                    <CollapseTop/>
                </div>
                <div className="collapse_content">
                    <CollapseContent/>
                </div>
            </div>
            </>
        )
    }
}