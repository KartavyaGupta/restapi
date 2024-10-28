import studentModel from "../models/Student.js";
class studentController {
  static createDoc = async (req, res) => {
    try {
      const { name, age, fees } = req.body;
      const doc = new studentModel(req.body);
      const result = await result.save();
    } catch (error) {
      console.log(error);
    }
  };
  static getAllDoc = async (req, res) => {
    const result = await studentModel.find();
    res.send(result);
  };
  static singleDocById = async (req, res) => {
    const result = await studentModel.findById(req.params.id);
    res.send(result);
  };
  static updateDocById = async (req, res) => {
    const result = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(result);
  };
  static deleteDocById = async (req, res) => {
    const result = await studentModel.findByIdAndDelete(req.params.id);
    res.status(204).send(result);
  };
}

export default studentController;
