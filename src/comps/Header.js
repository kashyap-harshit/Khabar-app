import React, { Component } from 'react'
import logo from './logo.png';
import {Link} from 'react-router-dom'


export class Header extends Component {
    constructor(props){
        // console.log("constructor");
        super();
        this.state = {
            tempQuery: ""
        }
    }

    querySubmit = (event)=>{
        event.preventDefault();
        this.props.queryChanger(this.state.tempQuery);
    }
    render() {
        // console.log("render");
        return (
            
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="/">Navbar</a> */}
                        <img src={logo} alt="logo" className='logo' />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li onClick={e=>{this.props.slugChanger(e)}}><Link className="dropdown-item" to="/">General</Link></li>
                                        <li onClick={e=>{this.props.slugChanger(e)}}><Link className="dropdown-item" to="/business">Business</Link></li>
                                        <li onClick={e=>{this.props.slugChanger(e)}}><Link className="dropdown-item" to="/science">Science</Link></li>
                                        <li onClick={e=>{this.props.slugChanger(e)}}><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                        <li onClick={e=>{this.props.slugChanger(e)}}><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                        <li onClick={e=>{this.props.slugChanger(e)}}><Link className="dropdown-item" to="/health">Health</Link></li>
                                        
                                    </ul>
                                </li>
                                
                            </ul>
                            <form className="d-flex" role="search" onSubmit={this.querySubmit}>
                                <input onChange={(e)=>{this.setState({tempQuery: e.target.value})}} className="navSearch form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
