import React from "react";
import "./FoodItem.css";
function FoodItem({ id, name, price, description, image }) {
  return (
    <>
      <div className="foo-item">
        <div className="food-item-img-container">
          <img className="food-item-image" src={image} alt="" />
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodItem;
