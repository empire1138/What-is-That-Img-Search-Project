import React, { useState } from 'react'
import Navbar from '../../Components/NavBar/Navbar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import styles from './SearchDashBoard.module.css';
import ImageList from '../../Components/ImageList/ImageList.js'

function SearchDashBoard() {
    const [returnImageResults, setImageResults] = useState([]);

    console.log(returnImageResults,'test');    
     return (
        <div>
            <Navbar />

            <div className={styles.searchBar}>
                <SearchBar returnImageResults={returnImageResults => setImageResults(returnImageResults)} />
            </div>
            <div>
                <ImageList returnImageResults={returnImageResults}/>
            </div>

        </div>
    )
}

export default SearchDashBoard
