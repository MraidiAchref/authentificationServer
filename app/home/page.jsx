'use client'
import React, { useState , useEffect} from "react";
import "./homePageStyle.css"
import Pagination from '@mui/material/Pagination';
const options = [5,10,15,20,25,30,35,40]
import lengthRetriever from "../components/organisms/AnimeCardContainer/lengthRetriever"

import ButtonAppBar from "../components/molecules/ButtonAppBar"
import AnimeCardContainer from "../components/organisms/AnimeCardContainer/AnimeCardContainer"

export default function home() {

    const [selectedOption, setSelectedOption] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalLength, setTotalLength] = useState(1);



    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }; 

    const handleSelectChange = (event) => {
        setSelectedOption(Number(event.target.value));

    };
    useEffect(() => {
        async function fetchTotalLength() {
            const response = await lengthRetriever();
            setTotalLength(response.data );
        }

        fetchTotalLength();
    }, []);

    return (
        <div className="home-page-container">
            <ButtonAppBar className="ButtonAppBar"/>
            <select value={selectedOption}  onChange={handleSelectChange} className="number-of-displayed-anime-selector">
                {options.map((option) => (
                <option key={option} value={option}>{option}</option>))}
            </select>        
        <AnimeCardContainer className="AnimeCardContainer" animesPerPage={selectedOption} pageNumber={currentPage} />
        <Pagination className="pagination-bar" count={Math.ceil(totalLength/ selectedOption)} color="secondary" page={currentPage} onChange={handlePageChange}/>
        </div>
    )
}