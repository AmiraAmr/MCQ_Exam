import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import users from '../db/users.js'
import userSlice, { failed, loggedIn } from '../features/userSlice.js';

import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';


const Login = () => {

  // Calling the redux state
  const { auth } = useSelector(state => state.user)
  const dispatch = useDispatch()

  // To redirect to exam in case the login is successful
  let navigate = useNavigate();

  const [ userData, setUserData ] = useState({
      id: '',
      name: '',
      email: '',
      password: ''
    })

  const [authMsg, setAuthMsg] = useState('')

  const dataHandler = (e) => {
    const key = e.target.id
    const value = e.target.value
    setUserData((prevState) => {
      return { ...prevState, [key]: value }
    })
  }

  const submitForm = (e) => {
    e.preventDefault()

    // Compring the entered data to the db saved users
    const user = users.filter(user => {
      if(userData.name.toLowerCase() === user.name.toLowerCase() && userData.email.toLowerCase() === user.email.toLowerCase() && userData.password === user.password) {
        return user
      }
    })

    if(!user.length) {
      dispatch(failed())
      setAuthMsg('User login error. Kindly check your credentials and try again')
    } else {
      dispatch(loggedIn())
      navigate("/exam/1");
    }
    
  }

  return (
    <div className='login'>
        <Container>
          <h1>MCQ exam</h1>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" onChange={e => dataHandler(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Your Email" onChange={e => dataHandler(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Your Password"  onChange={e => dataHandler(e)} />
                </Form.Group>
                <Button variant="primary" type="submit" name="submit" onClick={e => submitForm(e)}>
                    Submit
                </Button>
            </Form>

            <h5 className='errorMsg'>{authMsg}</h5>

            <div className='notes'>
            <p>Notes: </p>
            <ol>
              <li>Once you login the exam will start.</li>
              <li>Don't go back to a question, you will be logged out !</li>
            </ol>
            </div>
            
        </Container>
    </div>
  )
}

export default Login
