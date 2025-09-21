import React, { useState, useEffect } from "react";
import "./App.css";
import "./Responsive.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Courses from "./components/Courses";
import LibrarySection from "./components/LibrarySection";
import Notifications from "./components/Notifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AuthPage from "./components/AuthPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [categoryToScroll, setCategoryToScroll] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  // Initial loader on page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  // Function to open Auth modal with loader
  const openAuth = () => {
    setLoading(true); // show loader
    setTimeout(() => {
      // simulate async action
      setLoading(false);
      setShowAuth(true);
    }, 500); // small delay for smooth effect
  };

  const closeAuth = () => setShowAuth(false);

  return (
    <div className="App">
      {/* Loader */}
      {loading && <Loader />}

      {/* Main Content */}
      {!loading && !showAuth && (
        <>
          <Header onCategorySelect={setCategoryToScroll} showAuth={openAuth} />
          <Home />
          <Courses scrollToCategory={categoryToScroll} />
          <LibrarySection scrollToCategory={categoryToScroll} />
          <Notifications />
          <Contact />
          <Footer />
        </>
      )}

      {/* Auth Page Modal */}
      {showAuth && <AuthPage closeAuth={closeAuth} />}
    </div>
  );
}

export default App;
