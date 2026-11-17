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

  if (all == 0 ) {
    return <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </>
  }

  const average = ( good - bad ) / all
  const positive = ( good / all ) * 100

  return <>
    <h2>Statistics</h2>
    <table>
      <tbody>
        <StatisticLine text='Good' value={good}></StatisticLine>
        <StatisticLine text='Neutral' value={neutral}></StatisticLine>
        <StatisticLine text='Bad' value={bad}></StatisticLine>

        <StatisticLine text='All' value={all}></StatisticLine>
        <StatisticLine text='Average' value={average}></StatisticLine>
        <StatisticLine text='Positive' value={positive + "%"}></StatisticLine>
      </tbody>
    </table>
  </>
}

const StatisticLine = (props) => {
  return <>
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  </>
}

export default App
