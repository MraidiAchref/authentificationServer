import "./AnimeCardContainerStyle.css";
import Card from "../../atoms/animeCard";
import DataContainer from "./DataContainer";

export default function AnimeCardContainer() {
  const dataElement = DataContainer.map((obj) => {
    return <Card {...obj} />;
  });

  return (
      <div className="card-container">{dataElement}</div>
  );
}
