import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          {/* <Route index path="profile" element={<Profile />} /> */}
          {/* <Route path="account" element={<Account />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;