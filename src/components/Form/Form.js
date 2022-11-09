import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Table from "../Table/Table";
import TextField from "../TextField/TextField";
import RadioButton from "../RadioButton/RadioButton";
import Dropdown from "../Dropdown/Dropdown";
import Textarea from "../Textarea/Textarea";
import "../Form/Form.css";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [formValues, setFormValues] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [formarray, setFormArray] = useState(JSON.parse(localStorage.getItem("values")));
  const [isSubmit, setIsSubmit] = useState(false);
  const [editformarray, seteditFormArray] = useState(null);

  const setField = (field, value) => {
    setFormValues({ ...formValues, [field]: value });

    if (!!formErrors[field]) setFormErrors({ ...formErrors, [field]: null });
  };
 

  const updateUser = (formValues, id) => {
    const newUser = formarray.map((user) =>
      user.id === id ? { ...formValues, id } : user
    );
    // console.log("usernew", newUser)
    setFormArray(newUser);
    seteditFormArray("");
    // console.log("new user", setFormArray(newUser));
  };

  useEffect(() => {
    if (editformarray) {
      setFormValues({
        firstname: editformarray.firstname,
        lastname: editformarray.lastname,
        email: editformarray.email,
        dob: editformarray.dob,
        gender: editformarray.gender,
        country: editformarray.country,
        description: editformarray.description,
      });
    } else {
      setFormValues("");
    }
  }, [setFormValues, editformarray]);

  const { firstname, lastname, email, gender, country, dob, description } = formValues;

  //Form submit handling
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setFormErrors(formErrors);
    }
    //  setFormErrors(validate(formValues))
    setIsSubmit(true);
    if (
      firstname.length === 0 ||
      lastname.length === 0 ||
      email.length === 0 ||
      gender.length === 0 ||
      country.length === 0 ||
      dob.length === 0 ||
      description.length === 0
    ) {
      alert("Please fill up the details");
    }
  
    if (!editformarray) {
      setFormArray([
        ...formarray,
        {
          id: uuidv4(),
          firstname,
          lastname,
          email,
          gender,
          country,
          dob,
          description,
        },
      ]);
      setFormValues({
        firstname: "",
        lastname: "",
        email: "",
        gender: "",
        country: "",
        dob: "",
        description: "",
      });
    } else {
      updateUser(formValues, editformarray.id);
    }
    // console.log(formarray)
  };


  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, [formErrors]);

  //Save data at local storage
  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(formarray));
  }, [formarray]);


  //Validation form
  const validateForm = () => {
    const { firstname, lastname, email, gender, country, dob, description } =
      formValues;
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!firstname || firstname === "") {
      errors.firstname = "firstname is required";
    } else if (firstname.length <= 2) {
      errors.firstname = "firstname is too short";
    } else if (firstname.trim().length === 0) {
      errors.firstname = "blankspace is not allowed";
    }
    if (!lastname || lastname === "") {
      errors.lastname = "lastname is required";
    } else if (lastname.length <= 2) {
      errors.lastname = "firstname is too short";
    } else if (lastname.trim().length === 0) {
      errors.lastname = "blankspace is not allowed";
    }
    if (!email || email === "") {
      errors.email = "email is required";
    } else if (!regex.test(email)) {
      errors.email = "email is not valid";
    }
    if (!gender || gender === "") {
      errors.gender = "gender is required";
    }
    if (!country || country === "") {
      errors.country = "country is required";
    }
    if (!dob || dob === "") {
      errors.dob = "dob is required";
    }
    if (!description || description === "") {
      errors.description = "description is required";
    }
    return errors;
  };

  return (
    <div>
      <div className="form">
        <form
          onSubmit={handleSubmit}
          formarray={formarray}
          setFormArray={setFormArray}
          editformarray={editformarray}
          seteditFormArray={seteditFormArray}
        >
          <h3>Registration Form</h3>
          <TextField
            type="text"
            onValue={formValues.firstname}
            name="firstname"
            placeholder="Enter first name"
            onChange={(e) => setField("firstname", e.target.value)}
            isInvalid={!!formErrors.firstname}
          />
          <p className="error-p">{formErrors.firstname}</p>
          <TextField
            type="text"
            name="lastname"
            placeholder="Enter last name"
            onValue={formValues.lastname}
            onChange={(e) => setField("lastname", e.target.value)}
            isInvalid={!!formErrors.lastname}
          />
          <p className="error-p">{formErrors.lastname}</p>
          <TextField
            type="email"
            name="email"
            placeholder="Enter email"
            onValue={formValues.email}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!formErrors.email}
          />
          <p className="error-p">{formErrors.email}</p>
          <TextField
            type="date"
            name="dob"
            placeholder="Select date of birth"
            onValue={formValues.dob}
            onChange={(e) => setField("dob", e.target.value)}
            isInvalid={!!formErrors.dob}
          />
          <p className="error-p">{formErrors.dob}</p>
          <div className="radio-input">
            <label className="radio-label">Gender: </label>
            <RadioButton
              labelname="Male"
              onValue="male"
              name="gender"
              onChange={(e) => setField("gender", e.target.value)}
              checked={formValues.gender === "male"}
              isInvalid={!!formErrors.gender}
            />
            <RadioButton
              labelname="Female"
              onValue="female"
              name="gender"
              onChange={(e) => setField("gender", e.target.value)}
              checked={formValues.gender === "female"}
              isInvalid={!!formErrors.gender}
            />
          </div>
          <p className="error-p">{formErrors.gender}</p>
          <div className="select-input">
            <label className="radio-label">Select Your Country: </label>
            <Dropdown
              onValue={formValues.country}
              name="country"
              onChange={(e) => setField("country", e.target.value)}
              isInvalid={!!formErrors.country}
            />
          </div>
          <p className="error-p">{formErrors.country}</p>
          <label className="textarea-label">Write Short Description: </label>
          <Textarea
            className="textarea-input"
            name="description"
            onChange={(e) => setField("description", e.target.value)}
            isInvalid={!!formErrors.description}
          />
          <p className="error-p">{formErrors.description}</p>
          <Button editformarray={editformarray ? "Update" : "Add"} />

          <Table
            formValues={formValues}
            setFormValues={setFormValues}
            formarray={formarray}
            setFormArray={setFormArray}
            seteditFormArray={seteditFormArray}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
