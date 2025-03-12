const PersonForm = ({ formData, handleChange, addUsers }) => {
  return (
    <div>
      <form onSubmit={addUsers}>
        <div>
          name:{" "}
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          number:{" "}
          <input
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
