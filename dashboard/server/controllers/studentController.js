const studentModel = require("../models/student");

// Create the functions which will process data

// Create student
const createStudent = async (req, res) => {
  try {
    const newStudent = await studentModel.create(req.body);
    res.json(newStudent);
  } catch (err) {
    res.json(err);
  }
};

// Get all students data
const getAllStudents = async (req, res) => {
  try {
    const studentsData = await studentModel.find({});
    res.json(studentsData);
  } catch (error) {
    res.json(error);
  }
};

// Get one student
const getOneStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findById({ _id: id });
    res.status(200).json(student);
  } catch (err) {
    res.json(err);
  }
};

// Update student data
const updateStudentData = async (req, res) => {
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
};

// Delete student data
const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({ _id: id });
    res.status(200).json(student);
  } catch (err) {
    res.json(err);
  }
};

module.exports = { createStudent, getAllStudents, getOneStudent, updateStudentData, deleteStudent };