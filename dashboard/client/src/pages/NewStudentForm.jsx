import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function NewStudent() {
  const navigate = useNavigate();
  
  const [admNo, setAdmNo] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [units, setUnits] = useState(0);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:8080/spaceX/api/newStudent",
      {
        admNo,
        name,
        age,
        email,
        course,
        units
      });
    navigate("/");
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmitForm}>
        <h5 className="formTitle">Student Registration Form</h5>
        <label htmlFor="admNo">Adm No</label>
        <input
          type="number"
          placeholder="Adm No"
          id="admNo"
          name="admNo"
          onChange={(e) => setAdmNo(e.target.value)}
          required
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Student name"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          placeholder="Age"
          id="age"
          name="age"
          required
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="course">Course</label>
        <input
          type="text"
          placeholder="Course"
          id="course"
          name="course"
          required
          onChange={(e) => setCourse(e.target.value)}
        />

        <label htmlFor="units">Units</label>
        <input
          type="number"
          placeholder="Units"
          id="units"
          name="units"
          required
          onChange={(e) => setUnits(e.target.value)}
        />

        <button className="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default NewStudent;
