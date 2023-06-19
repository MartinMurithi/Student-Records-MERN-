import React, { useEffect, useState } from "react";
import "./Table.css";
import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Table() {
  const GET_STUDENTS_API = "http://localhost:8080/spaceX/api/allStudents";
  const navigate = useNavigate();

  const [studentsData, setStudentsData] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(GET_STUDENTS_API);
      const data = res.data;
      setStudentsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (studentId) => {
    await axios.delete(`http://localhost:8080/spaceX/api/deleteStudent/${studentId}`);
    fetchStudents()
  }

  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <div className="tableContainer">
      <button className="addBtn" onClick={() => navigate("/createUser")}>
        <BsPlus fontSize={"22px"} />
        Add
      </button>
      <table className="table">
        <tbody>
          <tr>
            <th>Adm No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Course</th>
            <th>Units</th>
            <th></th>
            <th></th>
          </tr>
          </tbody>
        {studentsData.length > 0
          ? studentsData.map((student) => {
            return (
              <tbody key={student._id}>
                <tr>
                <td>{student.admNo}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>{student.units}</td>
                  <td>
                    <button
                      className="editBtn"
                      onClick={() => navigate(`/updateUser/${student._id}`)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="deleteBtn" onClick={() => handleDelete(student._id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })
          : <tbody>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
        }
      </table>
    </div>
  );
}

export default Table;
