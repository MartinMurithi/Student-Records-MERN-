const express = require("express");
const router = express.Router();
const studentModel = require("../models/student");

router.get("/spaceX/api/allStudents", async(req, res) => {
  try {
    const studentsData = await studentModel.find({});
    res.json(studentsData);
  } catch (error) {
    res.json(error);
  }
});

router.get("/spaceX/api/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findById({ _id: id });
    res.status(200).json(student);
  } catch (err) {
    res.json(err);
  }
})

router.put("/spaceX/api/updateStudent/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newStudent = await studentModel.findByIdAndUpdate(
      { _id: id },
      {
        admNo: req.body.admNo,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        course: req.body.course,
        units: req.body.units,
      }
    );
    res.status(200).json(newStudent);
  } catch (err) {
    res.json(err);
  }
});


router.post("/spaceX/api/newStudent", async (req, res) => {
  try {
    const newStudent = await studentModel.create(req.body);
    res.json(newStudent);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/spaceX/api/deleteStudent/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({ _id: id });
    res.status(200).json(student);
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;