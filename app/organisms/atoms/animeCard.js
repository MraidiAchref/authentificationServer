import React from "react";
import './animeCardStyle.css' ;


export default function Card(data) {

    return(
            <div className="card">
                <img src={data.img_url}></img>
                <div className="state-container">
                    <span>{data.score}</span>
                    <span>  (6) &#8226; </span>
                    <span>{data.episodes} episodes </span>
                </div>
                <p>{data.title}</p>
            </div>
    )
}