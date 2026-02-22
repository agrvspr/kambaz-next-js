import Link from "next/link";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import Card from "react-bootstrap/Card";
import CardText from "react-bootstrap/CardText";
import CardImg from "react-bootstrap/CardImg";
import Button from "react-bootstrap/Button";
import * as db from "../database";
export default function Dashboard() {
  const courses = db.courses;
  return (
  <div id="wd-dashboard">
   <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
   <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
   <div id="wd-dashboard-courses">
    <Row xs={1} md={5} className="g-4">
     {courses.map((course) => (
     <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
       <Link href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link text-decoration-none text-dark" >
        <CardImg src="/images/reactjs.webp" variant="top" width="100%" height={160} />
        <CardBody className="card-body">
         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
          {course.name} </CardTitle>
         <CardText className="wd-dashboard-course-description overflow-hidden" style={{height:"100px"}}>
          {course.description} </CardText>
         <Button variant="primary"> Go </Button>
        </CardBody>
       </Link>
      </Card>
     </Col>
    ))}
   </Row>
  </div>
 </div>);}
