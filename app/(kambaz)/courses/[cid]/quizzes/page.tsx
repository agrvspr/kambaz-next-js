"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { FaPlus, FaBan, FaCheckCircle } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { Quiz, addQuiz, deleteQuiz, updateQuiz } from "./reducer";
import QuizContextMenu from "./QuizContextMenu";
import QuizAvailability from "./QuizAvailability";
import { BsGripVertical } from "react-icons/bs";

export default function Quizzes({ params }: { params: { cid: string } }) {
  const { cid } = params;
  const dispatch = useDispatch();
  const router = useRouter();

  // Select quizzes for this course from the Redux store
  const quizzes: Quiz[] = useSelector((state: any) =>
    (state.quizzesReducer?.quizzes ?? []).filter(
      (q: Quiz) => q.courseId === cid
    )
  );

  const handleAddQuiz = () => {
    const newQuiz: Quiz = {
      _id: uuidv4(),
      courseId: cid,
      title: "New Quiz",
      description: "",
      points: 0,
      published: false,
      questions: [],
      quizType: "Graded Quiz",
      assignmentGroup: "Quizzes",
      shuffleAnswers: true,
      timeLimit: 20,
      multipleAttempts: false,
      showCorrectAnswers: false,
      oneQuestionAtATime: true,
      webcamRequired: false,
      lockQuestionsAfterAnswering: false,
    };
    dispatch(addQuiz(newQuiz));
    router.push(`/Kambaz/Courses/${cid}/Quizzes/${newQuiz._id}`);
  };

  const handleDelete = (quizId: string) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      dispatch(deleteQuiz(quizId));
    }
  };

  const handlePublishToggle = (quiz: Quiz) => {
    dispatch(updateQuiz({ ...quiz, published: !quiz.published }));
  };

  return (
    <div id="wd-quizzes" className="p-3">
      {/* Top toolbar */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search for Quiz"
          id="wd-search-quiz"
        />
        <div className="d-flex gap-2">
          <button
            id="wd-add-quiz-btn"
            className="btn btn-danger"
            onClick={handleAddQuiz}
          >
            <FaPlus className="me-1" />
            Quiz
          </button>
        </div>
      </div>

      {/* Assignment group header */}
      <div className="border-start border-success border-5 mb-3">
        <div
          className="p-3 bg-secondary d-flex justify-content-between align-items-center text-white"
          id="wd-quizzes-title"
        >
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5" />
            <strong>ASSIGNMENT QUIZZES</strong>
          </div>
        </div>
      </div>

      {/* Quiz list */}
      <ul id="wd-quiz-list" className="list-group list-group-flush">
        {quizzes.length === 0 ? (
          <li className="list-group-item text-center text-muted py-5">
            <p className="mb-1">No quizzes yet.</p>
            <p>
              Click the <strong>+ Quiz</strong> button to add your first quiz.
            </p>
          </li>
        ) : (
          quizzes.map((quiz) => (
            <li
              key={quiz._id}
              className="list-group-item d-flex align-items-center justify-content-between py-3"
              style={{ borderLeft: "3px solid green" }}
            >
              {/* Left: publish toggle */}
              <div className="me-3">
                <button
                  className="btn btn-sm p-0 border-0 bg-transparent"
                  title={quiz.published ? "Click to Unpublish" : "Click to Publish"}
                  onClick={() => handlePublishToggle(quiz)}
                >
                  {quiz.published ? (
                    <FaCheckCircle className="text-success" size={20} />
                  ) : (
                    <FaBan className="text-danger" size={20} />
                  )}
                </button>
              </div>

              {/* Center: quiz info */}
              <div className="flex-grow-1">
                <a
                  href={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`}
                  className="fw-bold text-dark text-decoration-none"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`);
                  }}
                >
                  {quiz.title}
                </a>
                <QuizAvailability quiz={quiz} />
              </div>

              {/* Right: context menu */}
              <div className="d-flex align-items-center gap-2">
                {quiz.published ? (
                  <FaCheckCircle className="text-success" title="Published" />
                ) : (
                  <FaBan className="text-secondary" title="Unpublished" />
                )}
                <QuizContextMenu
                  quiz={quiz}
                  onEdit={() =>
                    router.push(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`)
                  }
                  onDelete={() => handleDelete(quiz._id)}
                  onPublishToggle={() => handlePublishToggle(quiz)}
                />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}