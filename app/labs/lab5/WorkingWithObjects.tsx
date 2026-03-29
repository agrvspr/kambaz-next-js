"use client";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });

  const [module, setModule] = useState({
    id: "m1", name: "NodeJS Module",
    description: "Learn NodeJS and ExpressJS",
    course: "CS5610",
  });

  const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={ASSIGNMENT_API}>Get Assignment</a><hr/>

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${ASSIGNMENT_API}/title`}>Get Title</a><hr/>

      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title" className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}/>
      <br/>

      <a id="wd-update-assignment-score" className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API}/score/${assignment.score}`}>
        Update Score
      </a>
      <FormControl className="w-75" id="wd-assignment-score" type="number"
        defaultValue={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })}/>
      <br/>

      <a id="wd-update-assignment-completed" className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <FormControl className="w-75" id="wd-assignment-completed" type="checkbox"
        defaultChecked={assignment.completed}
        onChange={(e) => setAssignment({ ...assignment, completed: (e.target as any).checked })}/>
      <hr/>

      <h4>Retrieving Module</h4>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={MODULE_API}>Get Module</a><br/><br/>

      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${MODULE_API}/name`}>Get Module Name</a><hr/>

      <h4>Modifying Module</h4>
      <a id="wd-update-module-name" className="btn btn-primary float-end"
         href={`${MODULE_API}/name/${module.name}`}>
        Update Name
      </a>
      <FormControl className="w-75" id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}/>
      <br/>

      <a id="wd-update-module-description" className="btn btn-primary float-end"
         href={`${MODULE_API}/description/${module.description}`}>
        Update Description
      </a>
      <FormControl className="w-75" id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}/>
      <hr/>
    </div>
  );
}