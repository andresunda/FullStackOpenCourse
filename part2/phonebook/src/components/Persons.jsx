const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person, index) => (
        <div key={index}>
          <p>
            {person.name} {person.phonenumber}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Persons;
