import { useState } from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const AnecdotePreffered = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes);
  const maxAnecdoteVote = votes.indexOf(maxVotes);
  return (
    <>
      {maxVotes === 0 ? (
        <div>
          <p>No votes yet</p>
        </div>
      ) : (
        <div>
          <h2>Anecdote with most votes</h2>
          <p>{anecdotes[maxAnecdoteVote]}</p>
          <p>Has {maxVotes} votes</p>
        </div>
      )}
    </>
  );
};

const Content = ({ text, votes }) => {
  return (
    <div>
      <div>
        <p>{text}</p>
        <p>has {votes} votes</p>
      </div>
    </div>
  );
};

const Button = ({ text, action }) => {
  return <button onClick={action}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleSubmit = () => {
    let randomAnecdote;
    do {
      randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    } while (randomAnecdote === selected);
    setSelected(randomAnecdote);
  };

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <Title title={"Anecdote of the day"} />
      <Content text={anecdotes[selected]} votes={votes[selected]} />
      <Button text={"vote"} action={handleVote} />
      <Button text={"next anecdote"} action={handleSubmit} />
      <Title title={"Anecdote with most votes"} />
      <AnecdotePreffered anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
