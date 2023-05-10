import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, cartProducts } from "../redux/actions/productAction";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, description, category } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);
  const addedtoCart = (pid) => {
    console.log("added to cart", pid);
    dispatch(cartProducts(productId));
  };
  return (
    <div className="container my-5">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="">
          <div className="">
            <div className="flex flex-col gap-5 md:flex-row ">
              <div className="flex justify-center align-center flex-1">
                <img className="justify-center w-3/5" src={image} alt={"image"}></img>
              </div>
              <div className="flex flex-col items-center gap-2 justify-center flex-1">
                <h1 className="mx-5">Title : {title}</h1>
                <h2>
                  <a className=" text-green-800">Price: ${price}</a>
                </h2>
                <h3 className="">Category: {category}</h3>
                <p className="mx-5 my-1">Description : {description}</p>
                <h4>Quality: Standard</h4>
                <h4>Size: L</h4>

                <div className="" tabIndex="0">
                  <div className="">
                    <i className="shop icon"></i>
                  </div>
                  {/* <div className="visible content" onClick={addedtoCart(productId)}>Add to CART</div> */}
                </div>
                <button className="bg-teal-400 px-5 py-2" onClick={() => addedtoCart(productId)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
