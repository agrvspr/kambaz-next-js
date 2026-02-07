import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { LuNotebookPen } from "react-icons/lu";

export default function Assignments() {
  return (
    /*https://getbootstrap.com/docs/5.3/utilities/spacing/ 
    */
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text bg-white border-end-0">
            <CiSearch />
          </span>
          <Form>
            <Row className="search" controlId="search-bar">
              <Col sm={10}> <FormControl type="Search" placeholder="Search..." /> </Col>
            </Row>
          </Form>
        </div>
        <div>
          <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>
      <div className="border-start border-success border-5">
        <div className="p-3 bg-secondary d-flex justify-content-between align-items-center" id="wd-assignments-title">
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
          <li className="wd-assignment-list-item list-group-item">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex flex-grow-1">
                <BsGripVertical className="me-2 mt-4 fs-4" />
                <LuNotebookPen className="me-4 mt-4 fs-4" />
                <div>
                  <Link href="/courses/1234/assignments/123" className="wd-assignment-link text-decoration-none text-dark fw-bold" >
                    A1 - ENV + HTML
                  </Link>
                  <div className="text-muted small">
                    <span className="text-danger"> Multiple Modules </span> | <strong>Not available until</strong> May 6 at 12:00am |
                  </div>
                  <div className="text-muted small">
                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2 mt-4 fs-5" />
                <IoEllipsisVertical className="mt-4 fs-4" />
              </div>
            </div>
          </li>

          <li className="wd-assignment-list-item list-group-item">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex flex-grow-1">
                <BsGripVertical className="me-2 mt-4 fs-4" />
                <LuNotebookPen className="me-4 mt-4 fs-4" />
                <div>
                  <Link href="/courses/1234/assignments/123" className="wd-assignment-link text-decoration-none text-dark fw-bold">
                    A2 - CSS + BOOTSTRAP
                  </Link>
                  <div className="text-muted small">
                    <span className="text-danger"> Multiple Modules </span> | <strong>Not available until</strong> May 13 at 12:00am |
                  </div>
                  <div className="text-muted small">
                    <strong>Due</strong> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2 mt-4 fs-5" />
                <IoEllipsisVertical className="mt-4 fs-4" />
              </div>
            </div>
          </li>

          <li className="wd-assignment-list-item list-group-item">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex flex-grow-1">
                <BsGripVertical className="me-2 mt-4 fs-4" />
                <LuNotebookPen className="me-4 mt-4 fs-4" />
                <div>
                  <Link href="/courses/1234/assignments/123" className="wd-assignment-link text-decoration-none text-dark fw-bold" >
                    A3 - JAVASCRIPT + REACT
                  </Link>
                  <div className="text-muted small ">
                    <span className="text-danger"> Multiple Modules </span> | <strong>Not available until</strong> May 20 at 12:00am |
                  </div>
                  <div className="text-muted small">
                    <strong>Due</strong> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success me-2 mt-4 fs-5" />
                <IoEllipsisVertical className="mt-4 fs-4" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
);}
