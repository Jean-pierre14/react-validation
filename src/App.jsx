import "./style.css";
import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Registration from "./components/Registration";
import Data from "./components/Data";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
