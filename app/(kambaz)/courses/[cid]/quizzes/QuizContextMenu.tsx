"use client";
import { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Quiz } from "./reducer";

interface QuizContextMenuProps {
  quiz: Quiz;
  onEdit: () => void;
  onDelete: () => void;
  onPublishToggle: () => void;
}

export default function QuizContextMenu({
  quiz,
  onEdit,
  onDelete,
  onPublishToggle,
}: QuizContextMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="position-relative" ref={menuRef}>
      <button
        className="btn btn-sm btn-light border"
        onClick={() => setOpen((o) => !o)}
        aria-label="Quiz options"
      >
        <BsThreeDotsVertical />
      </button>

      {open && (
        <ul
          className="dropdown-menu show"
          style={{ right: 0, left: "auto", top: "100%", zIndex: 1000 }}
        >
          <li>
            <button
              className="dropdown-item"
              onClick={() => {
                setOpen(false);
                onEdit();
              }}
            >
              Edit
            </button>
          </li>
          <li>
            <button
              className="dropdown-item text-danger"
              onClick={() => {
                setOpen(false);
                onDelete();
              }}
            >
              Delete
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => {
                setOpen(false);
                onPublishToggle();
              }}
            >
              {quiz.published ? "Unpublish" : "Publish"}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}