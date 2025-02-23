import AppLayout from "./components/AppLayout";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import Task from "./components/Task";
import { Toaster } from "react-hot-toast";

import Home from "./components/Home";
import Features from "./components/Features";
import FAQs from "./components/Faqs";
import About from "./components/About";
import Contact from "./components/Contact";

import Dashboard from "./components/Dashboard";
// import Projects from "./components/Projects";
import Tasks from "./components/Task";
// import Teams from "./components/Teams";

import Login from "./components/Login";
import Signup from "./components/Signup";

import Privacy from "./components/Privacy";
import Tos from "./components/Tos";

import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  console.log("render app..");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user token exists in local storage
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); // If token exists, user is logged in
  }, []);

  // return (
  //   <AppLayout>
  //     <Toaster position="top-right" gutter={8} />
  //     <Routes>
  //       <Route path="/:projectId" element={<Task />} />
  //       {/* <Route path="/" element={
  //         <div className="flex flex-col items-center w-full pt-10">
  //           <img src="./image/welcome.svg" className="w-5/12" alt="" />
  //           <h1 className="text-lg text-gray-600">Select or create new project</h1>
  //         </div>
  //       } /> */}
  //       <Route path="/" element={<Home />} />
  //       <Route path="/login" element={<Login />} />
  //     </Routes>
  //   </AppLayout>
  // );

  const location = useLocation();

  // Define public pages where the footer should be shown
  const publicRoutes = [
    "/",
    "/about",
    "/contact",
    "/faqs",
    "/features",
    "/login",
    "/signup",
    "/privacy",
    "/tos",
  ];
  const isPublicPage = publicRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar isAuthenticated={isAuthenticated} />

      <Toaster position="top-right" gutter={8} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/tasks" element={<Tasks />} />
        {/* <Route path="/teams" element={<Teams />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />

        {isAuthenticated && (
          <Route
            path="/:projectId"
            element={
              <AppLayout>
                <Task />
              </AppLayout>
            }
          />
        )}
      </Routes>

      {/* Sticky Footer at Bottom */}
      {/* Footer should be shown ONLY on public pages */}
      {isPublicPage && <Footer />}
    </div>
  );
}

export default App;
