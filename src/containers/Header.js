import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  const cart = useSelector((state) => state.cart.productId);

  return (
    <div className="container mx-auto">
      <div className="">
        <div className="flex justify-between mx-6 md:mx-24">
          <Link to={"/"}>
            <h1 className="text-black text-2xl">AnyShop</h1>
          </Link>

          <Link to={"/cart"}>
            <div className="px-5 m-2">
              <FontAwesomeIcon icon={faCartShopping} />
              <button>Cart</button>
            </div>
          </Link>
        </div>

        {/* <h1>{cart}</h1> */}
      </div>
    </div>
  );
};

export default Header;
