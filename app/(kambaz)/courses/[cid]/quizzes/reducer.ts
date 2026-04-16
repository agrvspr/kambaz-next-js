export interface Quiz {
  _id: string;
  courseId: string;
  title: string;
  description?: string;
  points: number;
  dueDate?: string;
  availableDate?: string;
  availableUntilDate?: string;
  published: boolean;
  questions: Question[];
  timeLimit?: number;
  multipleAttempts?: boolean;
  showCorrectAnswers?: boolean;
  accessCode?: string;
  oneQuestionAtATime?: boolean;
  webcamRequired?: boolean;
  lockQuestionsAfterAnswering?: boolean;
  shuffleAnswers?: boolean;
  quizType?: "Graded Quiz" | "Practice Quiz" | "Graded Survey" | "Ungraded Survey";
  assignmentGroup?: "Quizzes" | "Exams" | "Assignments" | "Project";
}
 
export interface Question {
  _id: string;
  title: string;
  type: "Multiple Choice" | "True/False" | "Fill in the Blank";
  points: number;
  question: string;
  choices?: Choice[];
  correctAnswer?: string;
}
 
export interface Choice {
  _id: string;
  text: string;
  isCorrect: boolean;
}
 
export interface QuizzesState {
  quizzes: Quiz[];
}
 
const initialState: QuizzesState = {
  quizzes: [],
};
 
const ADD_QUIZ = "ADD_QUIZ";
const DELETE_QUIZ = "DELETE_QUIZ";
const UPDATE_QUIZ = "UPDATE_QUIZ";
const SET_QUIZZES = "SET_QUIZZES";
 
export const addQuiz = (quiz: Quiz) => ({ type: ADD_QUIZ, payload: quiz });
export const deleteQuiz = (quizId: string) => ({ type: DELETE_QUIZ, payload: quizId });
export const updateQuiz = (quiz: Quiz) => ({ type: UPDATE_QUIZ, payload: quiz });
export const setQuizzes = (quizzes: Quiz[]) => ({ type: SET_QUIZZES, payload: quizzes });
 
const quizzesReducer = (state = initialState, action: any): QuizzesState => {
  switch (action.type) {
    case ADD_QUIZ:
      return { ...state, quizzes: [...state.quizzes, action.payload] };
    case DELETE_QUIZ:
      return {
        ...state,
        quizzes: state.quizzes.filter((q) => q._id !== action.payload),
      };
    case UPDATE_QUIZ:
      return {
        ...state,
        quizzes: state.quizzes.map((q) =>
          q._id === action.payload._id ? action.payload : q
        ),
      };
    case SET_QUIZZES:
      return { ...state, quizzes: action.payload };
    default:
      return state;
  }
};
 
export default quizzesReducer;