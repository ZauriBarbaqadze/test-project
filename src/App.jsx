import React from "react";
import Card from "./pages/card/index";
import AddCard from "./pages/AddCard/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Userdate from "./services/date";
const App = () => {
  return (
    <Provider store={Userdate}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddCard />} />
          <Route path="/:userId" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
