import React from "react";
import QuizCreator from "./components/quizCreator/QuizCreator"
import QuizList from "./components/quizCreator/QuizList";
import Quiz from "./components/quizCreator/Quiz";
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<QuizCreator/>}/>
          <Route path="/quizzes" element={<QuizList/>}/>
          <Route path="/quiz/:id" element={<Quiz/>}/>
          <Route
            path="/quiz/:id"
            render={({ match }) => <Quiz quizId={match.params.id} />}
          />

        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
