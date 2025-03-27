import React from "react";
import HelloPage from "./HelloPage";
import SearchPage from "./SearchPage";
import Error from "./Error";
import { BrowserRouter , Route , Routes } from "react-router";
const App = () => {
  
    return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HelloPage />} />
      <Route path="/search" element={<SearchPage />}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  </BrowserRouter>
    );
};

export default App;
