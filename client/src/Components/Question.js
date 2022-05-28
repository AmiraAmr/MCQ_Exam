import React, { Fragment, useEffect, useState } from 'react'
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { increment } from '../features/scoreSlice';

const Question = ({ question_num, questions_count, question }) => {

    // Calling the redux state
    const { score } = useSelector(state => state.score)
    const dispatch = useDispatch()

    //converting it to int number
    question_num = parseInt(question_num, 10)

    //destructuring a question data
    const { head, a, b, c, d, answer } = question


    //States
    const [ choiceAnswer, setChoiceAnswer ] = useState("")
    const [linkRouting, setLinkRouting] = useState("disabled-link")
    const [buttonColor, setButtonColor] = useState("dark")


    // Preventing the user from going back to the previuos question and redirects to the main
    let navigate = useNavigate()
    window.onpopstate = () => {
        navigate("/");
      }

    // Renders at the begning and when the user's choice changes
    useEffect(() => {

        // If the selected choice is the right answer set its state to true
        if(choiceAnswer === answer) {
            dispatch(increment())
            console.log("+1");
        }
        console.log("Score: " + score);

    },[choiceAnswer])


    // On each time the user choices an answer, set the button and link, and set the ChoiceAnswer to the user's answer
    const choice = (e) => {

        if(e){
            setChoiceAnswer(e)

            setLinkRouting("")
            setButtonColor("success")
        } else {
            setLinkRouting("disabled-link")
            setButtonColor("dark")
        }
    }

  return (
    <Fragment>
      <div className="question">
          <div>
            <h2><span>{question_num}. </span>{head}</h2>
            <div className='choices d-grid gap-2'>
            <ToggleButtonGroup type="radio" name="options" defaultValue={0} onChange={e => choice(e)}>
                    <ToggleButton id="tbg-radio-1" value={a} size="lg-12" variant='outline-dark'>
                    {a}
                    </ToggleButton>
                    <br></br>
                    <ToggleButton id="tbg-radio-2" value={b} variant='outline-dark'>
                    {b}
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={c} variant='outline-dark'>
                    {c}
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-4" value={d} variant='outline-dark'>
                    {d}
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            {
                questions_count === question_num ? <Button  variant={buttonColor}><Link to="/score" className={linkRouting}>Submit exam</Link></Button> : 
                <Button  variant={buttonColor} ><Link to={`/exam/${question_num+1}`} className={linkRouting} >Next question</Link></Button>
            }

            </div>
        </div>
    </Fragment>
  )
}

export default Question
