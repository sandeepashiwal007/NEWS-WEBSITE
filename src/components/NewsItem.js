import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,NewsUrl,NewsPublishedAt,Author}=this.props;
        return (
            <div>
                <div className="card" style={{width: "20rem",padding:"5px",border:"1px solid black"}}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={NewsUrl} className="btn btn-danger">Read More...</a>
                    </div>
                        <div className="card-footer text-danger">By {Author} on {new Date(NewsPublishedAt).toGMTString()}</div>
                </div>
            </div>
        )
    }
}
export default NewsItem;
