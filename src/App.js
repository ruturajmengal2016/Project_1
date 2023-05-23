import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navigation from "./Components/Atoms/Navigation";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Store from "./Pages/Store";
import OurStore from "./Pages/OurStore";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import Bill from "./Components/Atoms/Bill";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store/:name" element={<Store />} />
        <Route path="/faq" element={<h1>FAQ</h1>} />
        <Route path="/report" element={<h1>Report</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourite" element={<h1>Favourite</h1>} />
        <Route path="/notification" element={<h1>Notification</h1>} />
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
