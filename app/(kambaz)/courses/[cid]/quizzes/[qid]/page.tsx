"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { updateQuiz } from "../reducer";
import QuizQuestions from "./quizQuestions";

// button for the yes/no toggles
function YesNoToggle({ value, onChange }) {
    return (
        <div style={{ display: "flex", border: "1px solid #ccc", borderRadius: 6, overflow: "hidden", width: "fit-content" }}>
            <button
                onClick={() => onChange(true)}
                style={{
                    padding: "6px 12px",
                    background: value ? "#333" : "#fff",
                    color: value ? "#fff" : "#000",
                    border: "none",
                }}>
                Yes
            </button>
            <button
                onClick={() => onChange(false)}
                style={{
                    padding: "6px 12px",
                    background: !value ? "#333" : "#fff",
                    color: !value ? "#fff" : "#000",
                    border: "none",
                    borderLeft: "1px solid #ccc",
                }}>
                No
            </button>
        </div>
    );
}

//ease of use component for form fields
function Field({
    label,
    optional,
    children,
}: {
    label: string;
    optional?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 6 }}>
                {label}
                {optional && <span style={{ color: "#888" }}> optional</span>}
            </label>
            {children}
        </div>
    );
}

//card container
function Card({ title, children }) {
    return (
        <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8, marginBottom: 20 }}>
            <h3 style={{ marginBottom: 12 }}>{title}</h3>
            {children}
        </div>
    );
}

export default function QuizEditor() {
    const QUIZ_TYPES = ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"];
    const ASSIGNMENT_GROUPS = ["Quizzes", "Exams", "Assignments", "Projects"];
    const SHOW_CORRECT_OPTIONS = ["Immediately", "After Quiz", "After Due Date", "Never"];
    const initialQuiz = {
        title: "New Quiz",
        description: "",
        quizType: "Graded Quiz",
        assignmentGroup: "Quizzes",
        points: 0,
        password: "",
        shuffle: true,
        time: 20,
        multipleAttempts: false,
        howManyAttempts: 0,
        showCorrect: "Immediately",
        oneByOne: true,
        webcam: false,
        lockQuestions: false,
        dueDate: "",
        availableFrom: "",
        availableUntil: "",
        published: false,
        questions: [],
    };

    const { cid, qid } = useParams();
    const router = useRouter();
    const dispatch = useDispatch();
    const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
    const existingQuiz = useMemo(() => {
        return qid
            ? quizzes.find((q: any) => String(q._id) === String(qid))
            : null;
    }, [quizzes, qid]);

    const [quiz, setQuiz] = useState<any>(() =>
        existingQuiz ? { ...existingQuiz } : initialQuiz
    );
    const [activeTab, setActiveTab] = useState("details");

    const handleSave = () => {
        if (!cid || !qid) return;
        dispatch(updateQuiz({ ...quiz, _id: qid, courseId: cid }));
        router.push(`/courses/${cid}/quizzes/${qid}`);
    };

    const handleSaveAndPublish = () => {
        if (!cid || !qid) return;
        const publishedQuiz = {
            ...quiz,
            _id: qid,
            courseId: cid,
            published: false,
        };
        dispatch(updateQuiz(publishedQuiz));
        router.push(`/courses/${cid}/quizzes`);
    };

    const handleCancel = () => {
        if (!cid) return;
        router.push(`/courses/${cid}/quizzes`);
    };

    const set = (key: string, val: any) => setQuiz((q: any) => ({ ...q, [key]: val }));

    return (
        <div style={{ padding: 20 }}>
            <h1>{quiz.title}</h1>

            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                <button onClick={() => setActiveTab("details")}>Details</button>
                <button onClick={() => setActiveTab("questions")}>Questions</button>
            </div>

            {activeTab === "details" && (<>
                <Card title="Basic Information">
                    <Field label="Title">
                        <Form.Control
                            id="quiz-title"
                            name="title"
                            value={quiz.title}
                            onChange={(e) => set("title", e.target.value)}
                        />
                    </Field>

                    <Field label="Description" optional>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            id="quiz-description"
                            name="description"
                            value={quiz.description}
                            onChange={(e) => set("description", e.target.value)}
                        />
                    </Field>
                </Card>

                <Card title="Quiz Settings">
                    <Field label="Quiz Type">
                        <Form.Select
                            value={quiz.quizType}
                            onChange={(e) => set("quizType", e.target.value)}
                        >
                            {QUIZ_TYPES.map(t => <option key={t}>{t}</option>)}
                        </Form.Select>
                    </Field>

                    <Field label="Assignment Group">
                        <Form.Select
                            value={quiz.assignmentGroup}
                            onChange={(e) => set("assignmentGroup", e.target.value)}
                        >
                            {ASSIGNMENT_GROUPS.map(t => <option key={t}>{t}</option>)}
                        </Form.Select>
                    </Field>

                    <Field label="Points">
                        <Form.Control
                            type="number"
                            value={quiz.points}
                            onChange={(e) => set("points", Number(e.target.value))}
                        />
                    </Field>

                    <Field label="Access Code" optional>
                        <Form.Control
                            type="password"
                            value={quiz.password}
                            onChange={(e) => set("password", e.target.value)}
                        />
                    </Field>

                    <Field label="Multiple Attempts">
                        <Form.Check
                            type="checkbox"
                            label="Allow multiple attempts"
                            checked={quiz.multipleAttempts}
                            onChange={(e) => set("multipleAttempts", e.target.checked)}
                        />
                    </Field>
                </Card>

                <Card title="Behavior">
                    <Field label="Shuffle Answers">
                        <YesNoToggle value={quiz.shuffle} onChange={(v) => set("shuffle", v)} />
                    </Field>

                    <Field label="Webcam Required">
                        <YesNoToggle value={quiz.webcam} onChange={(v) => set("webcam", v)} />
                    </Field>

                    <Field label="Time Limit">
                        <Form.Control
                            type="number"
                            value={quiz.time}
                            onChange={(e) => set("time", Number(e.target.value))}
                        />
                    </Field>

                    <Field label="Show Correct Answers">
                        <Form.Select
                            value={quiz.showCorrect}
                            onChange={(e) => set("showCorrect", e.target.value)}
                        >
                            {SHOW_CORRECT_OPTIONS.map(t => <option key={t}>{t}</option>)}
                        </Form.Select>
                    </Field>

                    <Field label="One Question at a Time">
                        <YesNoToggle value={quiz.oneByOne} onChange={(v) => set("oneByOne", v)} />
                    </Field>

                    <Field label="Lock Questions After Answering">
                        <YesNoToggle value={quiz.lockQuestions} onChange={(v) => set("lockQuestions", v)} />
                    </Field>
                </Card>

                <Card title="Dates">
                    <Field label="Available Date">
                        <Form.Control
                            type="datetime-local"
                            value={quiz.availableFrom}
                            onChange={(e) => set("availableFrom", e.target.value)}
                        />
                    </Field>

                    <Field label="Due Date">
                        <Form.Control
                            type="datetime-local"
                            value={quiz.dueDate}
                            onChange={(e) => set("dueDate", e.target.value)}
                        />
                    </Field>
                </Card>
                <div className="d-flex justify-content-end gap-2 mt-3">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleSaveAndPublish}
                    >
                        Save and Publish
                    </button>
                </div>            </>)}

            {activeTab === "questions" && (
                <Card title="Questions">
                    <QuizQuestions
                        questions={quiz.questions}
                        onChange={(qs) => set("questions", qs)}
                    />
                </Card>
            )}
        </div>
    );
}