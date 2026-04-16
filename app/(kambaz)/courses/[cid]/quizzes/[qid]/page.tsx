"use client";

import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";

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
        accessCode: "",
        shuffleAnswers: true,
        timeLimit: 20,
        multipleAttempts: false,
        showCorrectAnswers: "Immediately",
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        dueDate: "",
        availableDate: "",
        availableUntilDate: "",
        published: false,
    };

    const [quiz, setQuiz] = useState(initialQuiz);
    const [activeTab, setActiveTab] = useState("details");

    const set = (key, val) => setQuiz(q => ({ ...q, [key]: val }));

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

    function DescriptionEditor({ value, onChange }) {
        const ref = useRef(null);
        const [focused, setFocused] = useState(false);

        const fmt = (cmd) => {
            ref.current?.focus();
            document.execCommand(cmd, false, null);
        };

        return (
            <div>
                <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                    <button onClick={() => fmt("bold")}>B</button>
                    <button onClick={() => fmt("italic")}>I</button>
                    <button onClick={() => fmt("underline")}>U</button>
                </div>

                <div
                    ref={ref}
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => onChange(e.currentTarget.innerHTML)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{
                        minHeight: 120,
                        padding: 10,
                        border: "1px solid #ccc",
                        borderRadius: 6,
                        outline: focused ? "2px solid #4a90e2" : "none",
                    }}
                />
            </div>
        );
    }

    function Card({ title, children }) {
        return (
            <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8, marginBottom: 20 }}>
                <h3 style={{ marginBottom: 12 }}>{title}</h3>
                {children}
            </div>
        );
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>{quiz.title}</h1>

            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                <button onClick={() => setActiveTab("details")}>Details</button>
                <button onClick={() => setActiveTab("questions")}>Questions</button>
            </div>

            {activeTab === "details" && (
                <>
                    <Card title="Basic Information">
                        <Field label="Title">
                            <Form.Control
                                value={quiz.title}
                                onChange={(e) => set("title", e.target.value)}
                            />
                        </Field>

                        <Field label="Description" optional>
                            <DescriptionEditor
                                value={quiz.description}
                                onChange={(v) => set("description", v)}
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
                                value={quiz.accessCode}
                                onChange={(e) => set("accessCode", e.target.value)}
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
                            <YesNoToggle value={quiz.shuffleAnswers} onChange={(v) => set("shuffleAnswers", v)} />
                        </Field>

                        <Field label="Webcam Required">
                            <YesNoToggle value={quiz.webcamRequired} onChange={(v) => set("webcamRequired", v)} />
                        </Field>

                        <Field label="Time Limit">
                            <Form.Control
                                type="number"
                                value={quiz.timeLimit}
                                onChange={(e) => set("timeLimit", Number(e.target.value))}
                            />
                        </Field>

                        <Field label="Show Correct Answers">
                            <Form.Select
                                value={quiz.showCorrectAnswers}
                                onChange={(e) => set("showCorrectAnswers", e.target.value)}
                            >
                                {SHOW_CORRECT_OPTIONS.map(t => <option key={t}>{t}</option>)}
                            </Form.Select>
                        </Field>
                    </Card>

                    <Card title="Dates">
                        <Field label="Due Date">
                            <Form.Control
                                type="datetime-local"
                                value={quiz.dueDate}
                                onChange={(e) => set("dueDate", e.target.value)}
                            />
                        </Field>
                    </Card>
                </>
            )}

            {activeTab === "questions" && (
                <Card title="Questions">
                    <p>No questions yet.</p>
                </Card>
            )}
        </div>
    );
}