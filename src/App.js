// import { Container } from 'react-bootstrap';
import './App.css';
import './Responsive.css';
import Courses from './components/Courses';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Courses />
    </div >
  );
}

export default App;
