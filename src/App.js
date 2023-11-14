import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Product = lazy(() => import("./Product"));
const Aboute = lazy(() => import("./Aboute"));
const Navbar = lazy(() => import("./Navbar"));
const Footer = lazy(() => import("./Footer"));
const Login = lazy(() => import("./login"));
const Profile = lazy(() => import("./Profile"));
const Product1 = lazy(() => import("../src/detail/poduct1"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<Aboute />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product1" element={<Product1 />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
