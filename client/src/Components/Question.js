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
    const [choiceStatus, setChoiceStatus] = useState(false)
    const [linkRouting, setLinkRouting] = useState("disabled-link")
    const [buttonColor, setButtonColor] = useState("dark")


    // Preventing the user from going back to the previuos question
    let navigate = useNavigate()
    window.onpopstate = () => {
        navigate("/");
      }

    // Renders at the begning and when the choiceStatus changes
    useEffect(() => {
        console.log("choiceStatus in ", choiceStatus);
        if(choiceStatus === true) {
            // If the choice status is true, then call the score increment action, that increases the score by 1
            dispatch(increment())
            console.log(score);
        }
    },[choiceStatus])

    useEffect(() => {
        console.log(score);
    }, [score])
    

    // verifing choice; and accordingly set the button and link
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

    const checkAnswer = () => {
        
        // If the selected choice is the right answer set its state to true
        if(choiceAnswer === answer) {
            setChoiceStatus(true)
            console.log("Set:" + choiceStatus);
            
        } else {
            setChoiceStatus(false)
        }

        console.log("Out " + choiceStatus);
        console.log("Score: " + score);
    }
    

    // On submitting the exam, just checking the last question's answer
    const onSubmit = (e) => {
        // e.preventDefault()
        checkAnswer()
    }


    //on clicking next to go the next question
    const getNext = (e) => {
        e.preventDefault()

        checkAnswer()
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
                questions_count === question_num ? <Button  variant={buttonColor}><Link to="/score" onClick={e => onSubmit(e)} className={linkRouting}>Submit exam</Link></Button> : 
                <Button  variant={buttonColor} onClick={e => getNext(e)}><Link to={`/exam/${question_num+1}`} className={linkRouting} >Next question</Link></Button>
            }

            </div>
        </div>
    </Fragment>
  )
}

export default Question
