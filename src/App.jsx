import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Product from "./components/Product";
import Home from "./components/Home";
import About from "./components/About";
import CartList from "./components/CartList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route element={<Header />}>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<CartList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
