"use client";
import React, { useEffect, useState } from "react";
import "./AnimeCardContainerStyle.css";
import Card from "../../molecules/animeCard/animeCard";
import dataManager from "./dataManager";

export default function AnimeCardContainer({ animesPerPage ,pageNumber  }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {

      const result = await dataManager((pageNumber-1)*animesPerPage,animesPerPage);
      
      setData(result);
    };

    fetchData();
  }, [pageNumber,animesPerPage]);

  const dataElement = data.map((obj) => {
    return <Card {...obj} />;
  });

  return <div className="card-container">{dataElement}</div>;
}
