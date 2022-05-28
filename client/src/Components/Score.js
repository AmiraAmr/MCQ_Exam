import React from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { calculateScore } from '../features/scoreSlice';

const Score = () => {
  
  const { score, percentage } = useSelector(state => state.score)
  const dispatch = useDispatch()
  dispatch(calculateScore())

  const percentage_approx = Math.ceil(percentage)

  return (
    <div className='score'>
      <Container>
        <h1>Your score is approxematly: {percentage_approx} %</h1>
      </Container>
    </div>
  )
}

export default Score
