import React, { useState } from "react";
import PortalComponent from "./PortalComponent";

const Shop = () => {
  const [showPortal, setShowPortal] = useState(false);
  const [selectedCard,setSelectedCard]=useState(null)

  const cardDetail=[
    { id: 1, title: "Card 1", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
  ]

  const showPortalHandler = (card) => {
    setSelectedCard(card)
    setShowPortal(true);
  };

  const closePortalHandler=()=>{
    setShowPortal(false)
  };

  return (
    <div
      className={`${showPortal ? "blur no-pointer-events" : ""} shopContainer`}
    >
    {cardDetail.map(card=>(
      <div className="card">
        <h2>{card.title}</h2>
        <p>
          <span>{card.title}:</span>
          {card.description}
        </p>
        <button onClick={() => showPortalHandler(card)}>Detail</button>
      </div>
    ))}
      {showPortal && (
        <PortalComponent closePortal={(e)=>closePortalHandler(e)} detail={selectedCard}>
          <div>
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.description}</p>
          </div>
        </PortalComponent>
      )}
    </div>
  );
};

export default Shop;
