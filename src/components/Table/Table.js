import "../Table/Table.css";
const Table = ({
  formarray,
  setFormArray,
  seteditFormArray,
}) => {

  //update the task
  const editUser = ({ id }) => {
    const findUser = formarray.find((todo) => todo.id === id);
    seteditFormArray(findUser)
  };

  //delete the task
  const deleteUser = ({ id }) => {
    setFormArray(formarray.filter((data) => data.id !== id));
  };

  return (
    <div>
      <table border="1" className="table">
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Country</th>
          <th>Date of Birth</th>
          <th>Short Description</th>
          <th>Actions</th>
        </tr>
        {formarray.map((data) => (
          <tr key={data.id}>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.email}</td>
            <td>{data.gender}</td>
            <td>{data.country}</td>
            <td>{data.dob}</td>
            <td>{data.description}</td>
            <td>
              <button className="edit-button" onClick={() => editUser(data)}>Edit</button>
              <button className="delete-button" onClick={() => deleteUser(data)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
