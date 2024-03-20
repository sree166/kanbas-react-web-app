import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaGlasses } from "react-icons/fa";

import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";



function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const redStyle = { color: 'red' };
    const breadcrumbStyle = {
        color: 'black',
    };
    const url = window.location.href;
    const term = url.split("/");
    const breadcrumb = term[term.length - 1]

    return (
        <div>
            <h1 style={redStyle}> <HiMiniBars3 /> Course {course?.name} <span style={breadcrumbStyle}> - {breadcrumb}</span>     <button style={{ float: 'right', color: 'black', background: 'lightgrey' }} className="btn btn-secondary  me-2" >
                <FaGlasses /> Student View
            </button> </h1>
            <hr />
            <CourseNavigation />

            <div>

                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "80px" }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;

