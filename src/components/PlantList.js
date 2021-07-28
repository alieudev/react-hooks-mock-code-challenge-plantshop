import React from "react";
import PlantCard from "./PlantCard";


function PlantList({plants }) {
  const renderPlants = plants.map( plant => {
    return <PlantCard key={plant.id}
                      name={plant.name}
                      image={plant.image}
                      price={plant.name} />
  })


  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
