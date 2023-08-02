import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <br />
    <Routes>
      <Route path="/" element={<ExercisesList />}></Route>
      <Route path="/edit/:id" element={<EditExercise />}></Route>
      <Route path="/create" element={<CreateExercise />}></Route>
      <Route path="/user" element={<CreateUser />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
