import React,{useState,useEffect} from 'react';
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import { quizById } from './actions';


function Quiz({ quizId }) {
    console.log(quizId ,"from Quiz")
    const [quiz, setQuiz] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(quizById(quizId))

    },[quizId])



  return (
    <div>Quiz</div>
  )
}

export default Quiz