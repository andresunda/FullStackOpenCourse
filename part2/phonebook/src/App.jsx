import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
  });
  const [persons, setPersons] = useState([]);

  const addUsers = (event) => {
    event.preventDefault();
    if (formData.name.trim() === "") {
      alert("Por favor, ingresa un nombre");
      return;
    } else if (formData.phonenumber.trim() === "") {
      alert("Por favor, ingresa un numero");
      return;
    }
    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (nameExists) {
      alert(`${formData.name} is already added to phonebook`);
      return;
    }
    setPersons([...persons, formData]);
    setFormData({ name: "", phonenumber: "" });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
      <h3>Add a bew</h3>
      <PersonForm
        formData={formData}
        handleChange={handleChange}
        addUsers={addUsers}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
