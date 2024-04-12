"use client";
import React, { useEffect, useState } from "react";
import "./AnimeCardContainerStyle.css";
import Card from "../../atoms/animeCard";
import DataContainer from "./DataContainer";
import dataManager from "./dataManager";

export default function AnimeCardContainer({ selectedNumber }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await dataManager(selectedNumber);
      setData(result);
    };

    fetchData();
  }, [selectedNumber]);

  const dataElement = data.map((obj) => {
    return <Card {...obj} />;
  });

  return <div className="card-container">{dataElement}</div>;
}
