import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/books/nav';
import Panel from './components/books/panel';
import Form from './components/books/form';
import Category from './components/categories/category';

function App() {
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
