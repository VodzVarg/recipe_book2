import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './App.css';
import Footer from './Footer';
import Registration from './Registration';
import RecipeApp from './RecipeApp';
import RecipePage from './Recipepage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
        <Route path="/page3" element={<Page3 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/recipeapp" element={<RecipeApp />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;