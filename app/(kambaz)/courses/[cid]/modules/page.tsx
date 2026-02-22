"use client"
import { useParams } from "next/navigation";
import * as db from "../../../database";
import ModulesControls from "./modulesControls";
import { ListGroup } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
  <ModulesControls /><br /><br /><br /><br />
  <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons /> </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons /> </ListGroupItem>
                ))}</ListGroup>)}</ListGroupItem>))}</ListGroup>
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
          <IoEllipsisVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />  
          </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
          <IoEllipsisVertical className="me-2 fs-3" /> LESSON 2<LessonControlButtons />  
          </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    </div>
);}
