import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  Link
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>}/>
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
      <div className="navigation">
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default App;
