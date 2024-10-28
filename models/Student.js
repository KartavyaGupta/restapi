import mongoose, { Mongoose } from "mongoose";
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (value) => {
      return value > 5000.5;
    },
  },
});

const studentModel = mongoose.model("student", studentSchema);
export default studentModel;
