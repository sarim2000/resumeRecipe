import './App.css';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <Container className="App mt-5">
      <h1 className='mb-5'>Recipe</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/create' element={<Add />} />
          <Route exact path='/edit' element={<Edit />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
