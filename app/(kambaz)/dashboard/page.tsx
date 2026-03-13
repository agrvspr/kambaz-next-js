"use client";
import { useState } from "react";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import Card from "react-bootstrap/Card";
import CardText from "react-bootstrap/CardText";
import CardImg from "react-bootstrap/CardImg";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addNewCourse, deleteCourse, updateCourse } from "../courses/reducer";
import { enroll, unenroll } from "../enrollments/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description",
  });

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (e: any) => e.user === currentUser?._id && e.course === courseId
    );

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((c) => isEnrolled(c._id));

  const isFaculty = ["FACULTY", "ADMIN"].includes(currentUser?.role);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <Button
        variant="primary"
        className="float-end"
        id="wd-enrollments-btn"
        onClick={() => setShowAllCourses(!showAllCourses)}>
        {showAllCourses ? "My Enrollments" : "All Courses"}
      </Button>

      {isFaculty && (<>
          <h5>
            New Course
            <button className="btn btn-primary float-end" id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" id="wd-update-course-click"
              onClick={() => dispatch(updateCourse(course))}>
              Update
            </button>
          </h5>
          <br />
          <FormControl value={course.name} className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description} as="textarea" rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            </>)}

      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((c) => (
            <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  href={isEnrolled(c._id) ? `/courses/${c._id}/home` : "#"}
                  onClick={(e) => { if (!isEnrolled(c._id)) e.preventDefault(); }}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg src="/images/reactjs.webp" variant="top" width="100%" height={160} />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}>
                      {c.description}
                    </CardText>

                    {/* Go button — only if enrolled */}
                    {isEnrolled(c._id) && (
                      <Button variant="primary" as={Link as any}
                        href={`/courses/${c._id}/home`}>
                        Go
                      </Button>
                    )}

                    {/* Enroll,  Unenroll */}
                    {isEnrolled(c._id) ? (
                      <button
                        className="btn btn-danger float-end"
                        id="wd-unenroll-click"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(unenroll({ userId: currentUser._id, courseId: c._id }));
                        }}>
                        Unenroll
                      </button>
                    ) : (
                      <button
                        className="btn btn-success float-end"
                        id="wd-enroll-click"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(enroll({ userId: currentUser._id, courseId: c._id }));
                        }}>
                        Enroll
                      </button>
                    )}
                    
                    {isFaculty && (<>
                        <button
                          className="btn btn-danger float-end me-2"
                          id="wd-delete-course-click"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(deleteCourse(c._id));
                          }}>
                          Delete
                        </button>
                        <button
                          className="btn btn-warning me-2 float-end"
                          id="wd-edit-course-click"
                          onClick={(e) => {
                            e.preventDefault();
                            setCourse(c);
                          }}>
                          Edit
                        </button></>)}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}