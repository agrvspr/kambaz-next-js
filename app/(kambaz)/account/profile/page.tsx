import Link from "next/link";
import { Button, FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
export default function Profile() {
  return (
    
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username"
             placeholder="username" 
             type="username"
             defaultValue="alice"/>
      <br />
      <FormControl id="wd-password"
             placeholder="password" 
             type="string"
             defaultValue="123"/>
      <br />
      <FormControl id="wd-firstname"
             placeholder="First Name" 
             defaultValue="Alice"/>
      <br />
      <FormControl id="wd-lastname"
             placeholder="Last Name" 
             defaultValue="Wonderland"/>
      <br />
      <FormControl id="wd-dob"
             placeholder="0000-00-00" 
             type="date"
             defaultValue="2000-01-01"/>
      <br />
      <FormControl id="wd-email" 
             type="email"
             defaultValue="alice@wonderland"/>
      <br />
      <Form.Select defaultValue="User">
        <option value="User">User</option>
        <option value="Faculty">Faculty</option>
      </Form.Select>
      <Link id="wd-signup-btn"
            href="/account/signin"
            className="btn btn-primary w-100 mb-2">
            Sign out </Link><br />
    </div>
);}
