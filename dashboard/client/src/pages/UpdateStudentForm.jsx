import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";

function UpdateStudentForm() {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const [admNo, setAdmNo] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [units, setUnits] = useState(0);

  const fetchStudent = async () => {
    const res = await axios.get(
      `http://localhost:8080/spaceX/api/student/${studentId}`
    );
    const data = res.data;
    setAdmNo(data?.admNo);
    setName(data?.name);
    setAge(data?.age);
    setEmail(data?.email);
    setCourse(data?.course);
    setUnits(data?.units);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const handleUpdateStudent = async (e) => {
    e.preventDefault()
    await axios.put(
      `http://localhost:8080/spaceX/api/updateStudent/${studentId}`,
      {
        admNo,
        name,
        age,
        email,
        course,
        units,
      }
    );
    navigate("/");
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleUpdateStudent}>
        <h5 className="formTitle">Student Registration Form</h5>
        <label htmlFor="admNo">Adm No</label>
        <input
          type="number"
          placeholder="Adm No"
          id="admNo"
          name="admNo"
          value={admNo}
          required
          onChange={(e) => setAdmNo(e.target.value)}
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Student name"
          id="name"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          placeholder="Age"
          id="age"
          name="age"
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="course">Course</label>
        <input
          type="text"
          placeholder="Course"
          id="course"
          name="course"
          value={course}
          required
          onChange={(e) => setCourse(e.target.value)}
        />

        <label htmlFor="units">Units</label>
        <input
          type="number"
          placeholder="Units"
          id="units"
          name="units"
          value={units}
          required
          onChange={(e) => setUnits(e.target.value)}
        />

        <button className="updateBtn">Update</button>
      </form>
    </div>
  );
}

export default UpdateStudentForm;
