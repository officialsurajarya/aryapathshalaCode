import { Container } from 'react-bootstrap';
import { Library } from 'lucide-react';
import './App.css';
import './Responsive.css';
import Courses from './components/Courses';
import Header from './components/Header';
import Home from './components/Home';
import React, { useState } from 'react';
import LibrarySection from './components/LibrarySection';

function App() {
  const [categoryToScroll, setCategoryToScroll] = useState(null);
  return (
    <div className="App">
      <Header onCategorySelect={setCategoryToScroll} />
      <Home />
      <Courses scrollToCategory={categoryToScroll} />
      <LibrarySection />
    </div>
  );
}

export default App;
