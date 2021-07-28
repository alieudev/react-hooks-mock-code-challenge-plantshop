import React, {useState} from "react";

function PlantCard({name, image, price}) {
  const [stockStatus, setStockStatus] = useState(true)

  function handleClick() {
    setStockStatus(!stockStatus)
  }
  const btnClass = stockStatus? "primary" : ""
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
        { <button onClick={handleClick}
          className={btnClass}>
            {stockStatus? "In Stock" : "Out of Stock"}
          </button>
        }
    </li>
  );
}

export default PlantCard;
