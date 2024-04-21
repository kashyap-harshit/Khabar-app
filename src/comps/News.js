import React, { Component } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export class News extends Component {
    capitalize = (s) => {
        return s.slice(0, 1).toUpperCase() + s.slice(1,);
    }
    
    fetching = async ()=>{

    }
    constructor(props) {
        super(props);
        this.state = {
            // mountUrl: `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=628a0e75d0f64cb7b44a284a69b5d0b2&pageSize=${this.props.pageSize}&q=${this.props.query}`,
            // moreUrl: `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=628a0e75d0f64cb7b44a284a69b5d0b2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&q=${this.props.query}`,
            articles: [],
            loading: false,
            totalResults: 0,
            page: 1,
            apiKey: "628a0e75d0f64cb7b44a284a69b5d0b2",

            // 9c42050f0f7c4b4aa4862d4b3cd81ad0
            // 628a0e75d0f64cb7b44a284a69b5d0b2


        }
    }

    fetchMore = async () => {
        // this.setState({ page: this.state.page + 1 });
        // console.log(this.state.page);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=628a0e75d0f64cb7b44a284a69b5d0b2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&q=${this.props.query}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(this.state.articles);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            page: this.state.page + 1
            // loading: false,
            // totalResults: parsedData.totalResults

        })
    }

    async componentDidMount() {
        // console.log("this is getting updated");
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=628a0e75d0f64cb7b44a284a69b5d0b2&page=${1}&pageSize=${this.props.pageSize}&q=${this.props.query}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults

        })
        // console.log(this.articles.state.length);

    }
    async componentDidUpdate(preProp, preState, snapshot) {
        // console.log("update");
        if (preProp.query !== this.props.query) {
            if (this.props.query.length > 0) {

                // console.log("query is changed");
                this.setState({
                    loading: true,

                });
                let url = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=628a0e75d0f64cb7b44a284a69b5d0b2&pageSize=${this.props.pageSize}&sortBy=publishedAt`;

                let data = await fetch(url);
                let parsedData = await data.json();
                this.setState({
                    articles: parsedData.articles,
                    loading: false,
                    totalResults: parsedData.totalResults

                })
                this.fetchMore = async () => {
                    // this.setState({ page: this.state.page + 1 });
                    // console.log(this.state.page);
                    let url = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=628a0e75d0f64cb7b44a284a69b5d0b2&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&sortBy=publishedAt`;
                    let data = await fetch(url);
                    let parsedData = await data.json();
                    console.log(this.state.articles);
                    this.setState({
                        articles: this.state.articles.concat(parsedData.articles),
                        page: this.state.page + 1
                        // loading: false,
                        // totalResults: parsedData.totalResults

                    })
                }
            }
            else {
                this.fetchMore = async () => {
                    // this.setState({ page: this.state.page + 1 });
                    // console.log(this.state.page);
                    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=628a0e75d0f64cb7b44a284a69b5d0b2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&q=${this.props.query}`;
                    let data = await fetch(url);
                    let parsedData = await data.json();
                    console.log(this.state.articles);
                    this.setState({
                        articles: this.state.articles.concat(parsedData.articles),
                        page: this.state.page + 1
                        // loading: false,
                        // totalResults: parsedData.totalResults

                    })
                }
            }
        }
        if (preProp.slug !== this.props.slug) {
            this.setState({ loading: true });
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=628a0e75d0f64cb7b44a284a69b5d0b2&pageSize=${this.props.pageSize}&q=${this.props.query}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                loading: false,
                totalResults: parsedData.totalResults

            })
        }
    }

    render() {
        return (
            <div >
                {/* {console.log(this.state.totalResults)} */}
                <div className="container titleCon ">
                    {this.props.query.length > 0 ? <h2>Headlines about "{this.capitalize(this.props.query)}"</h2> : <h2>Top {this.capitalize(this.props.category)} Headlines</h2>}
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMore}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    scrollableTarget="scrollableDiv"
                    style={{ overflow: "hidden" }}
                >
                    <div className="container">
                        <div className="row">

                            {this.state.loading ? <Spinner /> :
                                this.state.articles.map((element, index) => {
                                    return <div key={index} className="col-md-4 rowChild">
                                        <NewsItem title={!element.title ? "No Title" : element.title} desc={!element.description ? "No Description" : element.description} date={element.publishedAt} img={element.urlToImage} rFurther={element.url} />
                                    </div>
                                })}

                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News
