import React from 'react'

// svg import
import red_star from '../assets/svg/red-star-solid.svg'
import light_star from '../assets/svg/light-star-solid.svg'

export class LodgingHeader extends React.Component {

    getStars() {
        let red_stars_count = parseInt(this.props.rating, 10)
        let light_stars_count = 5 - red_stars_count
        let red_stars_tab = []
        let light_stars_tab = []
        let i = 0
        while (i < red_stars_count) {
            red_stars_tab.push("star")
            i ++
        }
        i = 0
        while (i < light_stars_count) {
            light_stars_tab.push("star")
            i ++
        }
        return {red_stars_tab, light_stars_tab}
    }

    render() {
        let tags = this.props.tags
        let result = this.getStars()
        let red_stars_count = result.red_stars_tab
        let light_stars_count = result.light_stars_tab
        let name = this.props.host.name.split(' ')
        return (
            <>
            <div className="lodging_header">
                <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.location}</p>
                    <div className="tags">
                        {tags.map ((tags, index)=> (
                            <div className="tag" key={`${index}_tag`}>
                                <p key={`${index}_text`}>{tags}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="part_2">
                    <div className="element_1">
                        <p>{name[0]}<br/>{name[1]}</p>
                        <img className="pp" src={this.props.host.picture} alt={`${this.props.host.name}`}/>
                    </div>
                    <div className="stars">
                        {red_stars_count.map ((red_stars_count, index)=> (
                            <img className="star" key={`${index}_red_stars`} src={red_star} alt=""/>
                        ))}
                        {light_stars_count.map ((light_stars_count, index)=> (
                            <img className="star" key={`${index}_light_stars`} src={light_star} alt=""/>
                        ))}
                    </div>
                </div>
            </div>
            </>
        )
    }
}