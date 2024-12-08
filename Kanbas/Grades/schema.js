import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
        /*answers: [
            {
                questionId: String,
                selectedChoiceIndex: Number,
                isCorrect: Boolean,
            },
        ],
        */
        answers: mongoose.Schema.Types.Mixed,
    },
    { collection: "grades" }
);
export default schema;