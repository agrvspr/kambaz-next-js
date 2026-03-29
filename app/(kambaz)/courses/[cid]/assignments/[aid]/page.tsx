"use client";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import * as client from "../client";
import { setAssignments } from "../reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);

  const existing = assignments.find((a: any) => a._id === aid);
  const isNew = aid === "new";

  const [assignment, setAssignment] = useState<any>(
    isNew
      ? {
        title: "New Assignment",
        description: "",
        points: 100,
        due: "",
        availableFrom: "",
        availableUntil: "",
        course: cid,
        modules: "Multiple Modules",
      }
      : { ...existing }
  );

  const handleSave = async () => {
    if (isNew) {
      const newAssignment = await client.createAssignment(cid as string, assignment);
      dispatch(setAssignments([...assignments, newAssignment]));
    } else {
      await client.updateAssignment(assignment);
      dispatch(setAssignments(assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a)));
    }
    router.push(`/courses/${cid}/assignments`);
  };

  const handleCancel = () => {
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Assignment Name</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={assignment.title}
              onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={12}>
            <Form.Control
              as="textarea"
              rows={6}
              value={assignment.description}
              placeholder="Assignment description..."
              onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Points</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: e.target.value })} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Assignment Group</Form.Label>
          <Col sm={10}>
            <Form.Select defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Display Grade as</Form.Label>
          <Col sm={10}>
            <Form.Select defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Decimal">Decimal</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Submission Type</Form.Label>
          <Col sm={10}>
            <div className="border rounded p-3 bg-light">
              <Form.Select defaultValue="Online">
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </Form.Select>
              <div className="mt-3 p-3 rounded">
                <Form.Label className="fw-bold">Online Entry Options</Form.Label>
                <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" className="mb-2" />
                <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked className="mb-2" />
                <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" className="mb-2" />
                <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" className="mb-2" />
                <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
              </div>
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Due</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="datetime-local"
              value={assignment.due}
              onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Available from</Form.Label>
          <Col sm={5}>
            <Form.Control
              type="datetime-local"
              value={assignment.availableFrom}
              onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })} />
          </Col>
          <Form.Label column sm={1} className="text-center">Until</Form.Label>
          <Col sm={4}>
            <Form.Control
              type="datetime-local"
              value={assignment.availableUntil}
              onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <button className="btn btn-secondary me-2" onClick={handleCancel} type="button">
              Cancel
            </button>
            <button className="btn btn-danger" onClick={handleSave} type="button">
              Save
            </button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}