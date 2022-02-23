import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import apiData from './redux/books/books';
import Nav from './components/books/nav';
import Category from './components/categories/category';
import Books from './components/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiData());
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <>
              <Nav />
              <Books />
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
