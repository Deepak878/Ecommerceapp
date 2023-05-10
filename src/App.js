import Header from "./containers/Header";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import Cart from "./containers/Cart";
function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
