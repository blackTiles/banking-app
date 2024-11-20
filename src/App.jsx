import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/webpages/Home";
import {
  BrowserRouter,
  Route,
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import AllCustomers from "./components/webpages/AllCustomers";
import CreateUser from "./components/webpages/CreateUser";
import Transfer from "./components/webpages/Transfer";
import Transactions from "./components/webpages/Transactions";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/allOurCustomers",
      element: <AllCustomers />,
    },
    {
      path: "/create-user",
      element: <CreateUser />,
    },
    {
      path: "/transfer",
      element: <Transfer />,
    },
    {
      path: "/transactions",
      element: <Transactions />,
    },
    {
      path: "*",
      element: <h1 className="text-4xl text-center mt-20">Page Not Found</h1>,
    },
  ]);

  return (
    <BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allOurCustomers" element={<AllCustomers />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
