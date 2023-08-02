import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <BrowserRouter>
    <Container>
      <Navbar />
       <br />
    <Routes>
      <Route path="/" element={<ExercisesList />}></Route>
      <Route path="/edit/:id" element={<EditExercise />}></Route>
      <Route path="/create" element={<CreateExercise />}></Route>
      <Route path="/user" element={<CreateUser />}></Route>
    </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
