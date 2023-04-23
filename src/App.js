import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
//importing react router dom for navigation

import Pricing from "./Components/Pricing"; //pages
import Navigation from "./Components/Navigation";
import Home from "./Components/Home"; //pages
import Register from "./Components/Register"; //pages
import Footer from "./Components/Footer";
import Login from "./Components/Login"; //pages
import About from "./Components/About"; //pages
import Training from "./Components/Training"; //pages
import TrainingSection from "./Components/Atoms/TrainingSection"; //pages
import { createContext, useState } from "react";

export const dataRoot = createContext();
function App() {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    subscribed: false,
    text:"JOIN US"
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/program" element={<TrainingSection />} />
        <Route path="/training" element={<Training />} />
        <Route index path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );
  return (
    <dataRoot.Provider value={{ data, setData, details, setDetails }}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </dataRoot.Provider>
  );
}

const Root = () => {
  return (
    <div className="root">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
