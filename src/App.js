import * as React from "react";

import Header from "./componentes/Header";
import Home from "./Views/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./componentes/PageNotFound.js/index.js";

import Footer from "./componentes/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact={true} path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
