import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
  Route,
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Pricing from "./Components/Pages/Pricing";
import Training from "./Components/Pages/Training";
import Trainners from "./Components/Pages/Trainners";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/trainners" element={<Trainners />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
