'use client'
import React, { useState } from "react";
import "./homePageStyle.css"
import Pagination from '@mui/material/Pagination';
const options = [5,10,15,20,25,30,35,40]

import ButtonAppBar from "../components/molecules/ButtonAppBar"
import AnimeCardContainer from "../components/organisms/AnimeCardContainer/AnimeCardContainer"

export default function home() {
    const [selectedOption, setSelectedOption] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalLength, setTotalLength] = useState(0);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }; 

    const handleSelectChange = (event) => {
        setSelectedOption(Number(event.target.value));
        
    };

    const handleLengthChange = (length) => {
        setTotalLength(length);
    };

    return (
        <div className="home-page-container">
            <ButtonAppBar className="ButtonAppBar"/>
            <select value={selectedOption}  onChange={handleSelectChange} className="number-of-displayed-anime-selector">
                {options.map((option) => (
                <option key={option} value={option}>{option}</option>))}
            </select>        
        <AnimeCardContainer className="AnimeCardContainer" animesPerPage={selectedOption} pageNumber={currentPage} onLengthChange={handleLengthChange}/>
        <Pagination className="pagination-bar" count={totalLength} color="secondary" page={currentPage} onChange={handlePageChange}/>
        </div>
    )
}