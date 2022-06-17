import React from "react";
import "./App.css";
import { useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { Women } from "./pages/Women";
import { Mens } from "./pages/Mens";
import { Kids } from "./pages/Kids";
import IndivisualProduct from "./pages/IndivisualProduct";
import { Routes, Route } from "react-router-dom";
import { NavbarCouponSlider } from "./components/NavbarCouponSlider";
import { NavBar } from "./components/NavBar";
import { CloseIcon } from "@chakra-ui/icons";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Footer } from "./components/Footer";
import { useContext } from "react";
import { Products } from "./pages/Products";

import { AuthContext } from "./contexts/AuthContext";
function App() {
  const [show, setShow] = useState(true);

  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  const { isAuth } = useContext(AuthContext);

  return (
    <ChakraProvider theme={theme}>
      {show ? <NavbarCouponSlider /> : null}
      <button
        className="navbarCouponBtn"
        onClick={() => {
          setShow(!show);
        }}
      >
        <CloseIcon />
      </button>
      <NavBar handleLoginClick={handleLoginClick} />

      {isAuth ? (
        <Login isShowLogin={isShowLogin} />
      ) : (
        <SignUp isShowLogin={isShowLogin} />
      )}

      <Routes
        onClick={() => {
          handleLoginClick();
        }}
      >
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Mens />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/kid" element={<Kids />}></Route>
        <Route
          path="/products"
          element={<Products value={"beuties"} />}
        ></Route>
        <Route
          path="/product/mens"
          element={<Products value={"mens"} />}
        ></Route>
        <Route
          path="/product/womens"
          element={<Products value={"womens"} />}
        ></Route>
        <Route
          path="/product/kids"
          element={<Products value={"kids"} />}
        ></Route>
        <Route
          path="/product/kids/:id"
          element={<IndivisualProduct value={"kids"} />}
        ></Route>
        <Route
          path="/product/mens/:id"
          element={<IndivisualProduct value={"mens"} />}
        ></Route>
        <Route
          path="/product/womens/:id"
          element={<IndivisualProduct value={"womens"} />}
        ></Route>
        <Route
          path="/products/:id"
          element={<IndivisualProduct value={"beuties"} />}
        ></Route>
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
