import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header"; 
import Footer  from "./components/Footer"; 
import {ErrorBoundary} from "./components/ErrorBoundary";
import Dashboard from "./views/Dashboard"; 
import ShowInfo from "./views/ShowInfo";

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <div className="p-10">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/show/:id" element={<ShowInfo />} />
            </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;