import React from "react";
import "./DestinationCard.css"; // Importing styles

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="image" />
      <h2>{destination.name}</h2>
      <h4>{destination.location}</h4>
      <p>{destination.description}</p>
      <p className="price">{destination.price}</p>
    </div>
  );
};

export default DestinationCard;