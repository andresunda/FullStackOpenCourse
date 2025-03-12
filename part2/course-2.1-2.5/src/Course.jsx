const Header = ({ title, size }) => {
  const Tag = `h${size}`;

  return (
    <div>
      <Tag>{title}</Tag>
    </div>
  );
};

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p>
        <strong>total of {totalExercises} exercises</strong>
      </p>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};

const Course = ({ courses }) => {
  const stackApp = courses[0];
  const nodejs = courses[1];

  return (
    <div>
      <Header title={"Web development curriculum"} size={1} />
      <Header title={stackApp.name} size={2} />
      <Content parts={stackApp.parts} />
      <Header title={nodejs.name} size={3} />
      <Content parts={nodejs.parts} />
    </div>
  );
};

export default Course;
