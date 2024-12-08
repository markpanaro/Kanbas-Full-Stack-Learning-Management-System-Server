import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        title: String,
        description: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        available: Date,
        due: Date,
        points: Number,
        questions: [
            {
                title: String,
                points: Number,
                choices: [
                    {
                        text: String,
                        isCorrect: Boolean,
                    },
                ],
                _id: String,
            },
        ],
    },
    { collection: "quizzes" }
);
export default schema;