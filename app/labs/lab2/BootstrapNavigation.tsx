import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import NavItem from "react-bootstrap/NavItem";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardText from "react-bootstrap/CardText";
import CardImg from "react-bootstrap/CardImg";
import CardTitle from "react-bootstrap/CardTitle";
import Button from "react-bootstrap/Button";

export default function BootstrapNavigation () {
    return (
<div id="wd-css-navigating-with-cards">
  <h2> Cards </h2>
  <Card style={{ width: "18rem" }}>
    <CardImg variant="top" src="/images/stacked.jpg" />
    <CardBody>
      <CardTitle>Stacking Starship</CardTitle>
      <CardText>
        Stacking the most powerful rocket in history. Mars or bust!
      </CardText>
      <Button variant="primary">Boldly Go</Button>
    </CardBody>
  </Card>
</div>

    );
}