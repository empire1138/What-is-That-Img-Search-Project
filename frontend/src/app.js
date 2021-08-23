import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import SearchBar from './Components/searchBar/SearchBar';
//import ImageList from './Components/ImageList/ImageList';


function app() {
    return (
        <div className=" ui container" >
            <Router>
                <Navbar />
                <SearchBar />
            </Router>


        </div>
    )
}

export default app
