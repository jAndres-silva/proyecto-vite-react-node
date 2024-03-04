// App.jsx
import React, { useState } from "react";
import "./App.css";
//importamos componentes 
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import CompShowProducto from "./ProductTable";
import CompCreateProducto from "./CreateProducto";
import CompEditProducto from "./EditProducto"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const handleMenuClick = () => {
    setOpenSidebarToggle(false); // Cerrar el sidebar al seleccionar un menú
  };

  return (
    <div className="grid-container">
      <BrowserRouter>
        <Header OpenSidebar={() => setOpenSidebarToggle(!openSidebarToggle)} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={() => setOpenSidebarToggle(!openSidebarToggle)}
          handleMenuClick={handleMenuClick}
        />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<CompShowProducto />} />
            <Route path="/create" element={<CompCreateProducto />} />
            <Route path="/edit/:id" element={<CompEditProducto />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
