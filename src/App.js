import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
