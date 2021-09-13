import React from 'react'
import UnsplashAPI from '../../API/UnsplashAPI';

import { useState, useEffect } from 'react';


import './SearchBar.css'

function SearchBar(props) {

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [imageResults, setImageResults] = useState([]); 

    const [searchPage,setSearchPage] = useState(0);

    // Need to clear the image Results for each result 
    

    function onSubmit(event) {
        event.preventDefault();
        setQuery(search);
        props.returnImageResults(imageResults); 
    }



    useEffect(() => {
        const fetchDataQuery = async() => {
            const url = `https://api.unsplash.com/search/photos?page=${page}`
            //const url = searchPage ? `${url}&query=search` : url

            const options = {
                params: {
                  page: page,
                  per_page: perPage,
                  order_by: "popularity"
                }
              };


            try{
                 await UnsplashAPI.get(`/search/photos?query=${query}`)
                .then(res => {
                    setImageResults([...imageResults, ...res.data.results] )
                })
            }catch (error){
                console.log(error);
            }
        } 
        console.log({ query });

        if (query !== ''){
            fetchDataQuery(); 
        }
    }, [ query]);
    
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
                    className="searchTerm"
                    onChange={event => setSearch(event.target.value)}
                    placeholder="Type Here for Image Search "
                />
                <button type="submit">Search</button>
            </form>
           
        </div>
        
    )
    
};

export default SearchBar
