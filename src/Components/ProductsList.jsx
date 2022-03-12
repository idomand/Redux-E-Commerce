import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import axiox from "axios";
import { setProducts } from "../Redux/Actions/productActions";
import { useSelector } from "react-redux";

export default function ProductsList() {
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();
  async function getProducts() {
    const response = await axiox
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("error", error);
      });
    dispatch(setProducts(response.data));
  }
  console.log("products :>> ", products);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" ui grid container">
      <ProductItem />
    </div>
  );
}
