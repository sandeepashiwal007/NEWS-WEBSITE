import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
export class news extends Component {
    static defaultProps={
        NumberOFNews : 20,
        country : 'in',
        category:'general'
    }
    static propTypes={
        NumberOFNews : PropTypes.number,
        country : PropTypes.string,
        category:PropTypes.string
     }

    capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            page:1,
            totalResults:0,
            NumberOfNews:props.NumberOfNews
        }  
        document.title= `${this.capitalizeFirstLetter(this.props.category)}`;
    }
    async componentDidMount(){
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8f3f506d41842e381f3e8ce8df5a053&page=1&pageSize=${this.state.NumberOfNews}`;
        this.props.setProgress(40);
        let data= await fetch(url);
        this.props.setProgress(60);
        let parsedData=await data.json();
        this.props.setProgress(80);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
        this.props.setProgress(100);
    }
    
    handlePages=async(PageNo)=>{
        this.props.setProgress(10);;
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=e8f3f506d41842e381f3e8ce8df5a053&page=${PageNo}&pageSize=${this.state.NumberOfNews}`;
        this.props.setProgress(40);
        let data= await fetch(url);
        this.props.setProgress(60);
        let parsedData=await data.json();
        this.props.setProgress(80);
        this.setState({         
            page: this.state.page=PageNo,
            articles: parsedData.articles,
        })
        this.props.setProgress(100);
    }
    
    
    render() {
        return (
            <div>
                <div className="container my-5">
                    <h2 className="text-center">Sandeep News page</h2>
                    <div className="row mb-4">
                        {
                            this.state.articles.map((element)=>{
                                return <div className="col md-4 my-3" key={element.url} >
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} NewsUrl={element.url} NewsPublishedAt={element.publishedAt} Author={element.author}/>
                                    </div>
                            })
                        }
                    </div>
                    <div className="container d-flex justify-content-between">
                    <button disabled= {this.state.page<=1} type="button" className="btn btn-danger" onClick={()=>{this.handlePages(this.state.page-1)}}>&larr; Previous</button>
                    <div className="btn-toolbar mx-2" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group me-3" role="group" aria-label="First group">
                            <button type="button" className="btn btn-danger" onClick={()=>{this.handlePages(1)}}>1</button>
                            <button type="button" className="btn btn-danger" onClick={()=>{this.handlePages(2)}}>2</button>
                            <button type="button" className="btn btn-danger" onClick={()=>{this.handlePages(3)}}>3</button>
                            <button type="button" className="btn btn-danger" onClick={()=>{this.handlePages(4)}}>4</button>
                        </div>
                    </div>
                    <button disabled= {this.state.page>((this.state.totalResults)/(this.state.NumberOfNews))} type="button" className="btn btn-danger" onClick={()=>{this.handlePages(this.state.page+1)}}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default news
