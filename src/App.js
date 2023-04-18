import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Pricing from "./Components/Pricing";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import About from "./Components/About";
import Training from "./Components/Training";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/home" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
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
