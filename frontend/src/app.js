import React from 'react'
import SearchBar from './Components/SearchBar/SearchBar';
import ImageList from './Components/ImageList/ImageList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function app() {
    return (
        <div className=" ui container" >
            <SearchBar/>
        </div>
    )
}

export default app
