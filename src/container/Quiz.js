import React from 'react'
import { useSelector } from "react-redux"
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import swal from 'sweetalert';


export default function Quiz() {
  const state1 = useSelector((e) => e);



  const [answer, setAnswer] = useState()
  let [counterQuestion, setCounterQuestion] = useState(0)
  let [marks, setMarks] = useState(0)



  const submitAnswer = () => {

    console.log("The Submit answer is" + answer)
    if (counterQuestion != 4) {
      setCounterQuestion(counterQuestion + 1);

      console.log("The answer is" + state1[counterQuestion].answer)
      console.log(counterQuestion)

      if (answer == state1[counterQuestion].answer) {
        setMarks(marks + 10)
        console.log("Right Answer")
      }
      else{
        console.log("Wrong Answer")
      }


    }
    else {
      swal({
        title: "Done!",
        text: `You have achieved  ${marks} marks`,
        icon: "success",
        button: "Click to restart The quiz!",
      });

      
      setCounterQuestion(0);
    }
  }

  return (
    <div className="quiz-container" id="quiz">
      <div className="quiz-header">
        <h2 id="question">{state1[counterQuestion].question}</h2>
        <Form>
          <ul>
            <li>
              <Form.Check
                type="radio"
                label={state1[counterQuestion].options[0]}
                value={state1[counterQuestion].options[0]}
                className="answer"
                name="group1"
                onChange={(e) => setAnswer(e.target.value)}
              />
            </li>
            <li>
              <Form.Check
                type="radio"
                label={state1[counterQuestion].options[1]}
                value={state1[counterQuestion].options[1]}
                className="answer"
                name="group1"
                onChange={(e) => setAnswer(e.target.value)}
              />
            </li>
            <li>
              <Form.Check
                type="radio"
                label={state1[counterQuestion].options[2]}
                value={state1[counterQuestion].options[2]}
                className="answer"
                name="group1"
                onChange={(e) => setAnswer(e.target.value)}
              />
            </li>
            <li>
              <Form.Check
                type="radio"
                label={state1[counterQuestion].options[3]}
                value={state1[counterQuestion].options[3]}
                className="answer"
                name="group1"
                onChange={(e) => setAnswer(e.target.value)}
              />
            </li>
          </ul>
        </Form>
      </div>
      {/* (state1[counterQuestion].answer) */}
      <button onClick={submitAnswer}>Submit</button>

    </div>

  )
}
