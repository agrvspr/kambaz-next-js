"use client";
import { Quiz } from "./reducer";

interface QuizAvailabilityProps {
  quiz: Quiz;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "N/A";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function QuizAvailability({ quiz }: QuizAvailabilityProps) {
  const now = new Date();
  const available = quiz.availableDate ? new Date(quiz.availableDate) : null;
  const until = quiz.availableUntilDate ? new Date(quiz.availableUntilDate) : null;

  let availabilityLabel: string;

  if (until && now > until) {
    availabilityLabel = "Closed";
  } else if (available && now < available) {
    availabilityLabel = `Not available until ${formatDate(quiz.availableDate)}`;
  } else {
    availabilityLabel = "Available";
  }

  return (
    <div className="text-muted small">
      <span className="me-3">
        <strong>Availability:</strong> {availabilityLabel}
      </span>
      {quiz.dueDate && (
        <span className="me-3">
          <strong>Due</strong> {formatDate(quiz.dueDate)}
        </span>
      )}
      <span className="me-3">
        <strong>{quiz.points} pts</strong>
      </span>
      <span>
        <strong>{quiz.questions?.length ?? 0} Questions</strong>
      </span>
    </div>
  );
}