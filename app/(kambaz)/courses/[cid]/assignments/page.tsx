"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Button, Form, Row, Col, FormControl } from "react-bootstrap";
import { LuNotebookPen } from "react-icons/lu";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import * as client from "./client";
import { setAssignments } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const handleDelete = (assignmentId: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      onDeleteAssignment(assignmentId);
    }
  };
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const onDeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentId)));
  };

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text bg-white border-end-0">
            <CiSearch />
          </span>
          <Form>
            <Row className="search">
              <Col sm={10}>
                <FormControl type="Search" placeholder="Search..." />
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button
            variant="danger"
            id="wd-add-assignment"
            onClick={() => router.push(`/courses/${cid}/assignments/new`)}
          >
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <div className="border-start border-success border-5">
        <div
          className="p-3 bg-secondary d-flex justify-content-between align-items-center"
          id="wd-assignments-title"
        >
          <div>
            <BsGripVertical className="me-2 fs-5" />
            <strong>ASSIGNMENTS</strong>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-3">40% of Total</span>
            <FaPlus className="me-2" />
            <IoEllipsisVertical className="fs-5" />
          </div>
        </div>

        <ul id="wd-assignment-list" className="list-group list-group-flush">
          {assignments.map((assignment: any) => (
            <li
              key={assignment._id}
              className="wd-assignment-list-item list-group-item"
            >
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex flex-grow-1">
                  <BsGripVertical className="me-2 mt-4 fs-4" />
                  <LuNotebookPen className="me-4 mt-4 fs-4" />
                  <div>
                    <Link
                      href={`/courses/${cid}/assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none text-dark fw-bold"
                    >
                      {assignment.title}
                    </Link>
                    <div className="text-muted small">
                      <span className="text-danger">{assignment.modules}</span> |{" "}
                      <strong>Not available until</strong> {assignment.availableFrom} |
                    </div>
                    <div className="text-muted small">
                      <strong>Due</strong> {assignment.due} | {assignment.points} pts
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaTrash
                    className="text-danger me-3 mt-4 fs-5"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(assignment._id, assignment.title)}
                    id="wd-delete-assignment-click"
                  />
                  <FaCheckCircle className="text-success me-2 mt-4 fs-5" />
                  <IoEllipsisVertical className="mt-4 fs-4" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}