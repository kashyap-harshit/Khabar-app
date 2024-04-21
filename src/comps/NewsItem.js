import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        // let {title, img, desc} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!this.props.img?"https://picsum.photos/200/300":this.props.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title.slice(0, 50) + "..."}</h5>
                            <p className="card-text date" >{new Date(this.props.date).toGMTString()}</p>
                            <p className="card-text">{this.props.desc.length>100?this.props.desc.slice(0, 100) + "...":this.props.desc}</p>
                            <a href={this.props.rFurther} target='__blank' className="btn ">Read Further</a>
                        </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
