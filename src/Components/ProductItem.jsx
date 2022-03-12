import React from "react";
import { useSelector } from "react-redux";

export default function ProductItem() {
  const products = useSelector((state) => state.allProducts.products);

  // const { id, title } = products[0];
  return (
    <div className="four column wide">
      <div className="ui link card">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">55</div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
