import React, { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import questions from '../db/questions.js'
import Question from './Question.js'

import { useSelector } from 'react-redux';

const Exam = () => {
  
  // Importing redux state
  const { auth } = useSelector(state => state.user)
  console.log("Auth: " + auth);

  const id = useParams().question_num
  const id_int = parseInt(id, 10) - 1

  const questions_count = questions.length

  const authenticationCheck = () => {
    if(auth) {
      return (
        <Question key={id} questions_count={questions_count} question_num={id} question={questions[id_int]}/>
      )
    } else {
      return (
        <h3 className='errorMsg'>User is not authenticated. Kindly <Link to="/login" className='login-link'>Login</Link></h3>
      )
    }
  }
  
  return (
    <Fragment>
      {/* {
        authenticationCheck()
      } */}

       
        <Question key={id} questions_count={questions_count} question_num={id} question={questions[id_int]}/> 

    </Fragment>
  )
}

export default Exam
