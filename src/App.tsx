// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Index from "./index";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/AboutPage" element={<AboutPage/>}/>
          <Route path="/ProjectPage" element={<ProjectPage/>}/>
          <Route path="/ContactPage" element={<ContactPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
