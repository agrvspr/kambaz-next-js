"use client"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button, FormSelect } from "react-bootstrap";
export default function AssignmentEditor() {
  /*https://react-bootstrap.netlify.app/docs/forms/checks-radios/ for checkboxes and Form.stuff
  */
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formAssignmentName">
          <Form.Label column sm={4}>
            Assignment Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formDescription">
          <Col sm={12}>
            <Form.Control
              as="textarea"
              rows={6}
              defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPoints">
          <Form.Label column sm={2}>
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" defaultValue={100} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAssignmentGroup">
          <Form.Label column sm={2}>
            Assignment Group
          </Form.Label>
          <Col sm={10}>
            <Form.Select defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formDisplayGrade">
          <Form.Label column sm={2}>
            Display Grade as
          </Form.Label>
          <Col sm={10}>
            <Form.Select defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Decimal">Decimal</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formSubmissionType">
          <Form.Label column sm={2}>
            Submission Type
          </Form.Label>
          <Col sm={10}>
          <div className="border rounded p-3 bg-light">
            <Form.Select defaultValue="Online">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </Form.Select>
            
            <div className="mt-3 p-3 rounded">
              <Form.Label className="fw-bold">Online Entry Options</Form.Label>
              
              <Form.Check
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
                className="mb-2"
              />
              
              <Form.Check
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
                defaultChecked
                className="mb-2"
              />
              
              <Form.Check
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
                className="mb-2"
              />
              
              <Form.Check
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
                className="mb-2"
              />
              
              <Form.Check
                type="checkbox"
                id="wd-file-upload"
                label="File Uploads"
              />
              </div>
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAssignTo">
          <Form.Label column sm={2}>
            Assign to
          </Form.Label>
          <Col sm={10}>
            <Form.Select defaultValue="Everyone" className="mb-3">
              <option value="Everyone">Everyone</option>
              <option value="Student">Student</option>
              <option value="Group">Group</option>
            </Form.Select>            
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formDueDate">
          <Form.Label column sm={2}>
            Due
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Available from
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="datetime-local"
              id="wd-available-from"
              defaultValue="2024-05-06T00:00"
            />
          </Col>
          <Form.Label column sm={1} className="text-center">
            Until
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="datetime-local"
              id="wd-available-until"
              defaultValue="2024-05-20T23:59"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="secondary" className="me-2">
              Cancel
            </Button>
            <Button variant="danger">
              Save
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
);}

