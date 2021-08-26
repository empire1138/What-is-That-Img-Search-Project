import React from 'react'
import UnsplashAPI from '../../API/UnsplashAPI';

import { useState, useEffect } from 'react';


import './SearchBar.css'

function SearchBar() {

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [imageResults, setImageResults] = useState([]); 

    function onSubmit(event) {
        event.preventDefault();
        setQuery(search);
    }

    useEffect(() => {
        const fetchDataQuery = async() => {
            try{
                 await UnsplashAPI.get(`/search/photos?query=${query}`)
                .then(res => {
                    console.log(res)
                    setImageResults(res.data.results)
                })
            }catch (error){}
        } 
        console.log({ query });

        if (query !== ''){
            fetchDataQuery(); 
        }
    }, [query]);
    
    return (
        <div className="ui container">
            <form onSubmit={onSubmit} >
                <label htmlFor="search">
                    <span className="search-title">Search for Images </span>
                </label>
                <input
                    type="text"
                    id="search"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    placeholder="Type Here for Image Search "
                />
                <button type="submit">Search</button>
            </form>
           
        </div>
        
    )
    
};

export default SearchBar
