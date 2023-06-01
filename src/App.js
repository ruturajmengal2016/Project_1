import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Store from "./Pages/Store";
import OurStore from "./Pages/OurStore";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import Bill from "./Components/Bill";
import FAQ from "./Pages/FAQ";
import Notification from "./Components/Advertisements";
import Report from "./Components/Report";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store/:name" element={<Store />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourite" element={<h1>Favourite</h1>} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/ourstore/:title" element={<OurStore />} />
        <Route path="/bill" element={<Bill />} />
      </Route>
    )
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;
