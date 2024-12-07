import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "AssignmentModel" },
    description: String,
    points: Number,
    available: Date,
    due: Date,
  },
  { collection: "assignments" }
);
export default schema;