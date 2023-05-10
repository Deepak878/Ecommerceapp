import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("products ho", products);
  const renderList = products.map((product) => {
    const { id, title, image, category, price } = product;

    return (
      <div className="box-border shadow-md p-4 border-2 w-5/12 md:w-3/12 my-2 mx-2">
        <Link to={`/product/${id}`}>
          <div className="">
            <img className="w-32 h-32" src={image} alt={title} />
          </div>
          <div className="content">
            <div className="">Title : {title}</div>
            <div className="text-green-800">Price : ${price}</div>
            <div className="">Category : {category}</div>
            <h4>Quality: Standard</h4>
                <h4>Size: L</h4>
          </div>
        </Link>
      </div>
    );
  });

  // const {id, title} = product[0];
  return <>{renderList}</>;
};

export default ProductComponent;
