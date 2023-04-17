import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Pricing from "./Components/Pricing";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>}/> 
        <Route path="/pricing" element={<Pricing/>}/> 
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
      <div className="outlet">
        <Outlet />
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default App;
