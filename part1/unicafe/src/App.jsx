import { useState } from "react";

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const Button = ({ onClick, title }) => {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

const StatisticsLine = ({ title, value }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ value }) => {
  const { good, neutral, bad } = value;
  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0;
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;

  return (
    <div>
      {total > 0 ? (
        <div>
          <table>
            <tbody>
              <StatisticsLine title={"Good"} value={good} />
              <StatisticsLine title={"Neutral"} value={neutral} />
              <StatisticsLine title={"Bad"} value={bad} />
              <StatisticsLine title={"All"} value={total} />
              <StatisticsLine title={"Average"} value={average} />
              <StatisticsLine
                title={"Positive"}
                value={`${positivePercentage} %`}
              />
            </tbody>
          </table>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Header title={"give feedback"} />
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Button onClick={() => setGood(good + 1)} title={"good"} />
        <Button onClick={() => setNeutral(neutral + 1)} title={"neutral"} />
        <Button onClick={() => setBad(bad + 1)} title={"bad"} />
      </div>
      <Header title={"statistics"} />
      <Statistics value={{ good, neutral, bad }} />
    </>
  );
};

export default App;
