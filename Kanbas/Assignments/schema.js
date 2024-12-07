import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "AssignmentModel" },
  },
  { collection: "assignments" }
);
export default schema;