import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";

 import { setProducts } from "../redux/actions/productAction";
const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
   const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
      dispatch(setProducts(response.data));
  };
  useEffect(()=>{
    fetchProducts();

  },[])
  console.log("Products", products);
  return (
    <div className="flex flex-wrap justify-center ">
      <ProductComponent></ProductComponent>
    </div>
  );
};

export default ProductListing;
