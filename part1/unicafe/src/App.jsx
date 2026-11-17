import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlegood = () => setGood(good+1)
  const handleneutral = () => setNeutral(neutral+1)
  const handlebad = () => setBad(bad+1)

  
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handlegood}>Good</button>
      <button onClick={handleneutral}>Neutral</button>
      <button onClick={handlebad}>Bad</button>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}

const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const all = good + neutral + bad
  const average = ( good - bad ) / all
  const positive = ( good / all ) * 100

  return <>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>

    <p>All {all}</p>
    <p>Average {average}</p>
    <p>Positive {positive}%</p>
  </>
}

export default App
