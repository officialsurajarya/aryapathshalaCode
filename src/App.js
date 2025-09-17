import React, { useState } from 'react';
import './App.css';
import './Responsive.css';
import Courses from './components/Courses';
import Header from './components/Header';
import Home from './components/Home';
import LibrarySection from './components/LibrarySection';
import Loader from './components/Loader';
import Notifications from './components/Notifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [categoryToScroll, setCategoryToScroll] = useState(null);

  return (
    <div className="App">
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div>
          <Header onCategorySelect={setCategoryToScroll} />
          <Home />
          <Courses scrollToCategory={categoryToScroll} />
          <LibrarySection scrollToCategory={categoryToScroll} />
          {/* <LibrarySection /> */}
          <Notifications />
          <Contact />
          <Footer />
          <AuthPage />
        </div>
      )}
    </div>
  );
}

export default App;
