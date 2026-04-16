"use client";

import { useState } from "react";
import { Form } from "react-bootstrap";

type QuestionType = "multiple_choice" | "true_false" | "fill_in_blank";

interface Choice {
  id: string;
  text: string;
}

interface Question {
  id: string;
  type: QuestionType;
  title: string;
  points: number;
  question: string;
  // multiple choice
  choices?: Choice[];
  correctChoiceId?: string;
  // true/false
  correctAnswer?: boolean;
  // fill in blank
  possibleAnswers?: string[];
}

const uid = () => Math.random().toString(36).slice(2, 8);

const makeQuestion = (): Question => ({
  id: uid(),
  type: "multiple_choice",
  title: "New Question",
  points: 1,
  question: "",
  choices: [
    { id: uid(), text: "" },
    { id: uid(), text: "" },
  ],
  correctChoiceId: undefined,
  correctAnswer: true,
  possibleAnswers: [""],
});

function MultipleChoiceEditor({
  q,
  onChange,
}: {
  q: Question;
  onChange: (q: Question) => void;
}) {
  const set = (key: keyof Question, val: any) =>
    onChange({ ...q, [key]: val });

  const updateChoice = (id: string, text: string) =>
    set(
      "choices",
      q.choices!.map((c) => (c.id === id ? { ...c, text } : c))
    );

  const addChoice = () =>
    set("choices", [...(q.choices ?? []), { id: uid(), text: "" }]);

  const removeChoice = (id: string) =>
    set(
      "choices",
      q.choices!.filter((c) => c.id !== id)
    );

  return (
    <>
      <div className="qe-field">
        <label>Choices</label>
        <p className="qe-hint">Click the button to mark the correct answer.</p>
        {q.choices?.map((c) => (
          <div key={c.id} className="qe-choice-row">
            <input
              type="radio"
              name={`correct-${q.id}`}
              checked={q.correctChoiceId === c.id}
              onChange={() => set("correctChoiceId", c.id)}
              title="Mark as correct"
            />
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Enter choice text…"
              value={c.text}
              onChange={(e) => updateChoice(c.id, e.target.value)}
            />
            <button
              className="qe-icon-btn qe-remove"
              onClick={() => removeChoice(c.id)}
              title="Remove choice"
            >
              ✕
            </button>
          </div>
        ))}
        <button className="qe-add-btn" onClick={addChoice}>
          + Add Choice
        </button>
      </div>
    </>
  );
}

function TrueFalseEditor({
  q,
  onChange,
}: {
  q: Question;
  onChange: (q: Question) => void;
}) {
  return (
    <div className="qe-field">
      <label>Correct Answer</label>
      <div className="qe-tf-row">
        {[true, false].map((val) => (
          <label key={String(val)} className="qe-tf-option">
            <input
              type="radio"
              name={`tf-${q.id}`}
              checked={q.correctAnswer === val}
              onChange={() => onChange({ ...q, correctAnswer: val })}
            />
            {val ? "True" : "False"}
          </label>
        ))}
      </div>
    </div>
  );
}

function FillInBlankEditor({
  q,
  onChange,
}: {
  q: Question;
  onChange: (q: Question) => void;
}) {
  const set = (key: keyof Question, val: any) =>
    onChange({ ...q, [key]: val });

  const updateAnswer = (i: number, val: string) => {
    const next = [...(q.possibleAnswers ?? [])];
    next[i] = val;
    set("possibleAnswers", next);
  };

  const addAnswer = () =>
    set("possibleAnswers", [...(q.possibleAnswers ?? []), ""]);

  const removeAnswer = (i: number) =>
    set(
      "possibleAnswers",
      q.possibleAnswers!.filter((_, idx) => idx !== i)
    );

  return (
    <div className="qe-field">
      <label>Possible Correct Answers: </label>
      <p className="qe-hint">Answers are case-insensitive.</p>
      {q.possibleAnswers?.map((ans, i) => (
        <div key={i} className="qe-answer-row">
          <Form.Control
            type="text"
            placeholder={`Answer ${i + 1}`}
            value={ans}
            onChange={(e) => updateAnswer(i, e.target.value)}
          />
          <button
            className="qe-icon-btn qe-remove"
            onClick={() => removeAnswer(i)}
            title="Remove answer"
          >
            ✕
          </button>
        </div>
      ))}
      <button className="qe-add-btn" onClick={addAnswer}>
        + Add Answer
      </button>
    </div>
  );
}

function QuestionCard({
  q,
  index,
  onUpdate,
  onDelete,
}: {
  q: Question;
  index: number;
  onUpdate: (q: Question) => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = useState(true);
  const [draft, setDraft] = useState<Question>(q);

  const LABELS: Record<QuestionType, string> = {
    multiple_choice: "Multiple Choice",
    true_false: "True/False",
    fill_in_blank: "Fill in the Blank",
  };

  const handleSave = () => {
    onUpdate(draft);
    setEditing(false);
  };

  const handleCancel = () => {
    setDraft(q);
    setEditing(false);
  };

  const handleTypeChange = (type: QuestionType) => {
    setDraft((d) => ({ ...d, type }));
  };

  if (!editing) {
    return (
      <div className="qe-card qe-card--preview">
        <div className="qe-card-header">
          <span className="qe-q-index">Q{index + 1}</span>
          <span className="qe-q-title">{q.title || "Untitled Question"}</span>
          <span className="qe-badge">{LABELS[q.type]}</span>
          <span className="qe-pts">{q.points} pt{q.points !== 1 ? "s" : ""}</span>
          <div className="qe-card-actions">
            <button className="qe-icon-btn" onClick={() => setEditing(true)}>
              ✏️ Edit
            </button>
            <button className="qe-icon-btn qe-remove" onClick={onDelete}>
              🗑
            </button>
          </div>
        </div>
        {q.question && (
          <p className="qe-q-preview">{q.question}</p>
        )}
      </div>
    );
  }

  return (
    <div className="qe-card qe-card--editing">
      <div className="qe-card-header">
        <span className="qe-q-index">Q{index + 1}</span>
        <Form.Select
          className="qe-type-select"
          value={draft.type}
          onChange={(e) => handleTypeChange(e.target.value as QuestionType)}
        >
          {Object.entries(LABELS).map(([val, label]) => (
            <option key={val} value={val}>
              {label}
            </option>
          ))}
        </Form.Select>
        <div className="qe-pts-inline">
          <label>Points</label>
          <Form.Control
            type="number"
            min={0}
            value={draft.points}
            onChange={(e) =>
              setDraft((d) => ({ ...d, points: Number(e.target.value) }))
            }
          />
        </div>
        <button className="qe-icon-btn qe-remove" onClick={onDelete}>
          X
        </button>
      </div>

      <div className="qe-card-body">
        <div className="qe-field">
          <label>Title</label>
          <Form.Control
            type="text"
            value={draft.title}
            onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
          />
        </div>

        <div className="qe-field">
          <label>Question</label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter question text…"
            value={draft.question}
            onChange={(e) =>
              setDraft((d) => ({ ...d, question: e.target.value }))
            }
          />
        </div>

        {draft.type === "multiple_choice" && (
          <MultipleChoiceEditor q={draft} onChange={setDraft} />
        )}
        {draft.type === "true_false" && (
          <TrueFalseEditor q={draft} onChange={setDraft} />
        )}
        {draft.type === "fill_in_blank" && (
          <FillInBlankEditor q={draft} onChange={setDraft} />
        )}
      </div>

      <div className="qe-card-footer">
        <button className="btn btn-secondary btn-sm" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn btn-danger btn-sm" onClick={handleSave}>
          Save Question
        </button>
      </div>
    </div>
  );
}

export default function QuizQuestions({
  questions,
  onChange,
}: {
  questions: Question[];
  onChange: (qs: Question[]) => void;
}) {
  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);

  const addQuestion = () => onChange([...questions, makeQuestion()]);

  const updateQuestion = (id: string, updated: Question) =>
    onChange(questions.map((q) => (q.id === id ? updated : q)));

  const deleteQuestion = (id: string) =>
    onChange(questions.filter((q) => q.id !== id));

  return (<>
      <div className="qe-root">
        <div className="qe-toolbar">
          <span className="qe-total-pts">
            Total Points: <strong>{totalPoints}</strong>
          </span>
          <button className="qe-new-btn" onClick={addQuestion}>
            + New Question
          </button>
        </div>

        {questions.length === 0 && (
          <div className="qe-empty">
            No questions yet. Click <strong>+ New Question</strong> to get started.
          </div>
        )}

        {questions.map((q, i) => (
          <QuestionCard
            key={q.id}
            q={q}
            index={i}
            onUpdate={(updated) => updateQuestion(q.id, updated)}
            onDelete={() => deleteQuestion(q.id)}
          />))}
      </div>
    </>);
    }