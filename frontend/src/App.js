import './App.css';
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import RegisterPage from "./pages/Auth/Register/RegisterPage";

function App() {
  return (

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<RegisterPage />}/>
          </Routes>
      </BrowserRouter>



  );
}

export default App;





