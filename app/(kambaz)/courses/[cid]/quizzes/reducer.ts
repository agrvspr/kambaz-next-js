import { createSlice } from "@reduxjs/toolkit";

const initialState = { quizzes: [] };

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, { payload: quiz }) => {
      state.quizzes.push(quiz);
    },

    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (q: any) => q._id !== quizId
      );
    },

    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },

    updateQuiz: (state, { payload: quiz }) => {
  state.quizzes = state.quizzes.map((q: any) =>
    String(q._id) === String(quiz._id) ? quiz : q
  );
},
  },
});

export interface Quiz {
  _id: string;
  courseId: string;
  title: string;
  description: string;

  assignmentGroup: "Quizzes" | "Exams" | "Assignments" | "Projects";

  points: number;

  shuffle: boolean;
  time: number;
  multipleAttempts: boolean;

  howManyAttempts: number;

  showCorrect: "Immediately" | "After Quiz" | "After Due Date" | "Never";
  quizType: "Graded Quiz" | "Practice Quiz" | "Graded Survey" | "Ungraded Survey";
  password: string;

  oneByOne: boolean;
  webcam: boolean;
  lockQuestions: boolean;
  published: boolean;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;

  questions: any[];
}

export const {
  addQuiz,
  deleteQuiz,
  setQuizzes,
  updateQuiz,
} = quizzesSlice.actions;

export default quizzesSlice.reducer;