const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getOneStudent,
  createStudent,
  updateStudentData,
  deleteStudent,
} = require("../controllers/studentController");

router.get("/spacex/api/allStudents", getAllStudents);
router.get("/spaceX/api/student/:id", getOneStudent);
router.post("/spaceX/api/newStudent", createStudent);
router.put("/spaceX/api/updateStudent/:id", updateStudentData);
router.delete("/spaceX/api/deleteStudent/:id", deleteStudent);
module.exports = router;
