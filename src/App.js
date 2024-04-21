import React, { Component } from 'react'
import './App.css';
import Header from './comps/Header';
import News from './comps/News';
import Footer from './comps/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      slug: ""

    }
  }
  slugChanger = (value) => {
    this.setState({
      slug: value
    })
    console.log("slug got changed");
  }
  queryChanger = (value) => {
    this.setState({ query: value });
    // console.log(value);
  }


  render() {
    return (
      <div>

        <Router>
          <div className="App">
            <Header slugChanger={this.slugChanger} query={this.state.query} queryChanger={this.queryChanger} />
            <Routes>
              <Route exact path='/' element={<News slug={this.state.slug} category="general" pageSize={6} query={this.state.query} />} />
              <Route exact path='/business' element={<News slug={this.state.slug} category="business" pageSize={6} query={this.state.query} />} />
              <Route exact path='/health' element={<News slug={this.state.slug} category="health" pageSize={6} query={this.state.query} />} />
              <Route exact path='/sports' element={<News slug={this.state.slug} category="sports" pageSize={6} query={this.state.query} />} />
              <Route exact path='/science' element={<News slug={this.state.slug} category="science" pageSize={6} query={this.state.query} />} />
              <Route exact path='/entertainment' element={<News slug={this.state.slug} category="entertainment" pageSize={6} query={this.state.query} />} />

            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
