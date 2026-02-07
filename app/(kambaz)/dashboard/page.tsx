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
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12) Should we change this to 7?</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.webp" width="100%" height={160}/>
                <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Full Stack software developer</CardText>
                <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
            <Card>
              <Link href="/courses/3650/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/systems.jpeg" width="100%" height={160} />
                <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3650</CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px "}}>
                  Computer Systems </CardText>
                <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
            <Card>
              <Link href="/courses/3000/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/math.jpeg" width="100%" height={160} />
                <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">3000</CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px "}}>
                  Algorithms and Data </CardText>
                <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
            <Card>
              <Link href="/courses/2220/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/hist.jpeg" width="100%" height={160} />
                <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">HIST2220</CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px "}}>
                  History of Technology </CardText>
                <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
            <Card>
              <Link href="/courses/1210/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/stacked.jpg" width="100%" height={160} />
                <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">1210</CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px "}}>
                  Professional Development Co-op </CardText>
                <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
            <Card>
              <Link href="/courses/2550/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/angel-falls.jpeg" width="100%" height={160} />
                <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CY2550</CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px "}}>
                  Cybersecurity </CardText>
                <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
            <Card>
              <Link href="/courses/2800/home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/lc.jpeg" width="100%" height={160} />
                <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">2800</CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{height: "100px "}}>
                  Logic and Computation </CardText>
                <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
        
      </div>
    </div>
);}

