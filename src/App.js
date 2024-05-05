import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Login from './Login';
import RecipeApp from './RecipeApp';
import RecipePage from './Recipepage';
import AdminPage from './AdminPage';
import HomePage from './HomePage'; 

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleLoginSuccess = () => {
    setIsAdmin(true);
  };

  return (
    <Provider store={store}> {/* Wrap your app with Provider */}
    <Router>
      <div className="App">
        <Navbar isAdmin={isAdmin} onLogout={handleLogout} />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Set the home page route */}
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/recipeapp" element={<RecipeApp/>} />
          <Route path="/recipe/:id" element={<RecipePage/>} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
}

export default App;