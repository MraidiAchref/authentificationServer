'use client'
import React, { useState } from "react";
import "./homePageStyle.css"
const options = [5,10,15,20,25,30,35,40]

import ButtonAppBar from "../organisms/molecules/ButtonAppBar"
import AnimeCardContainer from "../organisms/molecules/AnimeCardContainer/AnimeCardContainer"

export default function home() {
    const [selectedOption, setSelectedOption] = useState(15);

    const handleSelectChange = (event) => {
        setSelectedOption(Number(event.target.value));
    };
    return (
        <div className="home-page-container">
            <ButtonAppBar className="ButtonAppBar"/>
            <select value={selectedOption}  onChange={handleSelectChange} className="number-of-displayed-anime-selector">
                {options.map((option) => (
                <option key={option} value={option}>{option}</option>))}
            </select>        
        <AnimeCardContainer className="AnimeCardContainer" selectedNumber={selectedOption}/>
    
        </div>
    )
}