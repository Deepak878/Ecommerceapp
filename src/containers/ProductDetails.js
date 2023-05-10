import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, cartProducts } from "../redux/actions/productAction";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, description, category } = product;
  const [alert, setAlert] = useState(false);
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
    functionAlert();
  };
  const functionAlert = () => {
    setAlert(true);
    // Do something...
  };
  const handleClick = () => {
    setAlert(false)
    console.log('Span clicked');
    // Do something...
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
                <img
                  className="justify-center w-3/5 h-full"
                  src={image}
                  alt={"image"}
                ></img>
              </div>
              <div className="flex flex-col items-center gap-2 justify-center flex-1 border border-2">
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
                <button
                  className="bg-teal-400 px-5 py-2 mb-5"
                  onClick={() => addedtoCart(productId)}
                >
                  Add to Cart
                </button>
                {alert && (
                  <div
                    className="bg-blue-100 border border-gray-400 text-white-700 px-4 py-3 my-3 mx-3 rounded relative w-full"
                    role="alert"
                  >
                    <strong className="font-bold">Added!</strong>
                    <span className="block sm:inline mx-2 mr-10">
                      To the Cart
                    </span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={handleClick}>
                      <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
