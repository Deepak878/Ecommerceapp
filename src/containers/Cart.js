import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const productIds = useSelector((state) => state.cart.productId);
  console.log(productIds);
  const [productData, setProductData] = useState([]);
  // console.log(productId);
  useEffect(() => {
    const fetchDataForProducts = async () => {
      try {
        const responses = await Promise.all(
          productIds.map(async (productId) => {
            const response = await axios.get(
              `https://fakestoreapi.com/products/${productId}`
            );
            const data = await response.data;
            return data;
          })
        );
        setProductData(responses);
        console.log(responses);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchDataForProducts();
  }, []);
  return (
    <div className=" border border-2 flex justify-center">
      <div className="container">
        <h1 className=" flex flex-col gap-10 mx-5 mt-1">Order Summary</h1>
        {productData.map((product, index) => (
          <div className="my-3 mx-5" key={index}>
            <div className="border border-1 p-5">
              <img className="w-20 h-20 md:w-32 md:h-32 " src={product.image}></img>
              <div className="flex flex-col">
              <h1 className="">Title : {product.title}</h1>
                <h2>
                  <a className=" text-green-800">Price: ${product.price}</a>
                </h2>
                <h3 className="">Category: {product.category}</h3>
                <h4>Quality: Standard</h4>
                <h4>Size: L</h4>
              </div>
            </div>

            {/* Render other product details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
