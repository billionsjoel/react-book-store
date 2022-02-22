import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import { useEffect } from 'react';
import Nav from './components/books/nav';
import Panel from './components/books/panel';
import Form from './components/books/form';
import Category from './components/categories/category';

function App() {
  useEffect(() => {
    $(() => {
      $('.chart').easyPieChart({
        size: 60,
        barColor: '#379cf6',
        scaleLength: 0,
        lineWidth: 5,
        trackColor: '#e8e8e8',
        lineCap: 'circle',
        animate: 2000,
      });
    });
  });

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <>
              <Nav />
              <Panel />
              <Form />
            </>
    )}
        />
        <Route
          exact
          path="/categories"
          element={(
            <>
              <Nav />
              <Category />
            </>
    )}
        />
      </Routes>
    </Router>
  );
}

export default App;
