import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

import "./App.scss";
import Cart from "./components/Cart";

const App = () => {
  /* Envolvemos la home con el provider del context */

  return (
    <CartProvider>
      <BrowserRouter>
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
