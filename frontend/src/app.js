import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';
import './app.css'
//import ImageList from './Components/ImageList/ImageList';


function app() {
    return (
        <div className=" ui container" >
            <Router>
                <Navbar />
            </Router>
            <div className="searchBar">
                <SearchBar />
            </div>
        </div>
    )
}

export default app
