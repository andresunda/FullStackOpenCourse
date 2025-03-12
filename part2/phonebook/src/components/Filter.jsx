import { useState } from "react";

const Filter = ({ persons }) => {
  const [filter, setFilter] = useState("");

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <p>filter shown with</p>
      <input
        type="text"
        placeholder="search by name"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      {filteredPersons.map((person, index) => (
        <p key={index}>
          {person.name} {person.phonenumber}
        </p>
      ))}
      <br />
    </div>
  );
};

export default Filter;
