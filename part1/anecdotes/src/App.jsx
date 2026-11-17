import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const handleselected = (min, max) => {
    const random_num = Math.floor(Math.random() * (max - min + 1)) + min
    setSelected(random_num)
  }

  const handlevotes = (selected) => {
    const copy = [...votes]
    copy[selected] = copy[selected] + 1
    setVotes(copy)
  }

  console.log(votes)
  return (
    <div>
      <h2>{anecdotes[selected]}</h2>
      <h4>has {votes[selected]} votes</h4>
      
      <button onClick={() => handlevotes(selected)}>vote</button>
      <button onClick={() => handleselected(0, anecdotes.length - 1)}>next anecdote</button>
    </div>
  )
}

export default App