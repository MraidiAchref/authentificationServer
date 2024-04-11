import React from "react";
import "./homePageStyle.css"

import ButtonAppBar from "../organisms/molecules/ButtonAppBar"
import AnimeCardContainer from "../organisms/molecules/AnimeCardContainer/AnimeCardContainer"
export default function home() {
    return (
        <div className="home-page-container">
            <ButtonAppBar className="ButtonAppBar"/>
            <AnimeCardContainer className="AnimeCardContainer"/>
    
        </div>
    )
}