import React, { useState } from 'react'
import Navbar from '../../Components/NavBar/Navbar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import styles from './SearchDashBoard.module.css';
import ImageList from '../../Components/ImageList/ImageList.js'
import Loader from '../../Components/ImageListLoader/loader';
import InfinityScroll from 'react-infinite-scroll-component';

function SearchDashBoard() {
    const [returnImageResults, setImageResults] = useState([]);
    const [page, setPage] = useState(0);

    const fetchMorePages = () => {

    }

    return (
        <div>
            <Navbar />

            <div className={styles.searchBar}>
                <SearchBar returnImageResults={returnImageResults => setImageResults(returnImageResults)} />
            </div>
            <InfinityScroll
                dataLength={returnImageResults.length}
                next={fetchMorePages}
                hasMore={true}
                loader={<Loader />}
            >
                <div>
                    <ImageList returnImageResults={returnImageResults} />
                </div>
            </InfinityScroll>

        </div>
    )
}

export default SearchDashBoard
