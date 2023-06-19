const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  admNo: {
    type: Number,
    required: [true, "Please enter admission number"],
  },
  name: {
    type: String,
    required: [true, "Please enter student name"],
  },
  age: {
    type: Number,
    required: [true, "Please enter student age"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
  },
  course: {
    type: String,
    required: [true, "Please enter course field"],
  },
  units: {
    type: Number,
    required: [true, "Please enter number of units"],
  },
});

const studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel;
