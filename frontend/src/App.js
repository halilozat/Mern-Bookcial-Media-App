import './App.css';
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import RegisterPage from "./pages/Auth/Register/RegisterPage";
import Sidebar from "./layout/Sidebar";
import Header from "./components/MenuComponent/header/Header"

function App() {
  return (

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Header />}/>
          </Routes>
      </BrowserRouter>



  );
}

export default App;





