import React from 'react'
import UnsplashedAPI from '../API/UnsplashedAPI';
import { useState, useContext, useEffect } from 'react';


import './SearchBar.css'

function SearchBar() {

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [imageResults, setImageResults]

    function onSubmit(event) {
        event.preventDefault();
        setQuery(search);
    }

    useEffect(() => {
        async function fetchDataQuery() {
            try{
                const response = await UnsplashedAPI.get('/search/photos')
                .then(res => {

                })
            }catch (error){}
        } 
        console.log({ query });

        if (query !== ''){
            fetchDataQuery(); 
        }
    }, [query]);

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
};

export default SearchBar
