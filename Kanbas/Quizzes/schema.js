import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        title: String,
        description: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        available: Date,
        due: Date,
        points: Number,
        published: Boolean,
        type: String,
        instructions: String,
        group: String,
        time: Number,
        shuffle: Boolean,

        questions: [
            {
                title: String,
                points: Number,
                body: String,
                choices: [
                    {
                        text: String,
                        isCorrect: Boolean,
                    },
                ],
                answers: [String],
                _id: String,
            },
        ],
    },
    { collection: "quizzes" }
);
export default schema;