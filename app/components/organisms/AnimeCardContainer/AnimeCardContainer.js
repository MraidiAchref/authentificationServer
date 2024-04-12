"use client";
import React, { useEffect, useState } from "react";
import "./AnimeCardContainerStyle.css";
import Card from "../../molecules/animeCard/animeCard";
import DataContainer from "./DataContainer";
import dataManager from "./dataManager";

export default function AnimeCardContainer({ animesPerPage ,pageNumber ,onLengthChange  }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {result,length} = await dataManager();
      const wondredAmountOfAnime = result.slice(pageNumber*animesPerPage,(pageNumber+1)*animesPerPage)
      setData(wondredAmountOfAnime);
      onLengthChange(Math.ceil(length/animesPerPage));
    };

    fetchData();
  }, [pageNumber,animesPerPage]);

  const dataElement = data.map((obj) => {
    return <Card {...obj} />;
  });

  return <div className="card-container">{dataElement}</div>;
}
