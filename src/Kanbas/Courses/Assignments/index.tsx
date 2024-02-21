import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      {/* {<!-- Add buttons and other fields here -->} */}
      <span>
        <input type="text" placeholder="Search for Assignments" style={{ marginRight: '40px' }}/>

        <button type="button" className="btn btn-secondary me-2" style={{ color: 'black', background: 'lightgrey' }}>+ Group</button>

        <button type="button" className="btn btn-secondary me-2" style={{ color: 'white', background: 'red' }}>+ Module</button>

        <button type="button" className="btn btn-secondary me-2" style={{ background: 'lightgray' }}>
          <FaEllipsisV className="me-2" style={{ color: 'black' }} />
        </button>
      </span>

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;