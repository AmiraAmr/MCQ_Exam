import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import { Container } from 'react-bootstrap'
import './bootstrap.min.css';
import './App.css';
import Login from './Components/Login';
import Exam from './Components/Exam';
import Score from './Components/Score';


function App() {


  return (
    <Router>
      <main className="py-3">
        <Container>
          <Routes>

            <Route path='/login' element={<Login />} exact />
            <Route path='/exam/:question_num' element={<Exam />} />
            <Route path='/score' element={<Score />} />
            <Route path="*" element={<Navigate to="/login" replace />}/>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
