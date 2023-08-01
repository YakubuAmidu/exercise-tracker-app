import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact Component={ExercisesList} />
      <Route path='/edit/:id' exact Component={EditExercise} />
      <Route path='/create' Component={CreateExercise} />
      <Route path='/user' Component={CreateUser} />
    </Router>
  );
}

export default App;
