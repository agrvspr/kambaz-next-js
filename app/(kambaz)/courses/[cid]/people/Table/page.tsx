import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr>
       <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2020-10-01</td>
      <td className="wd-total-activity">10:21:32</td>
      </tr>
      <tr>
       <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Peter</span>{" "}
          <span className="wd-last-name">Parker</span></td>
      <td className="wd-login-id">008101962S</td>
      <td className="wd-section">S404</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2024-08-10</td>
      <td className="wd-total-activity">10:21:32</td>
      </tr>
      <tr>
       <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">J Jonah</span>{" "}
          <span className="wd-last-name">Jameson</span></td>
      <td className="wd-login-id">DAILYBUGLE</td>
      <td className="wd-section">S999</td>
      <td className="wd-role">REPORTER</td>
      <td className="wd-last-activity">1999-01-01</td>
      <td className="wd-total-activity">10:21:32</td>
      </tr>
      <tr>
       <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Real</span>{" "}
          <span className="wd-last-name">Person</span></td>
      <td className="wd-login-id">000000000P</td>
      <td className="wd-section">REDACTED</td>
      <td className="wd-role">REDACTED</td>
      <td className="wd-last-activity">XXXX-XX-XX</td>
      <td className="wd-total-activity">XX:XX:XX</td>
      </tr>
          {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
    </tbody>
   </Table>
  </div> );}