// import React, { useState } from "react";
// import "./index.css";
// import { modules } from "../../Database";
// import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
// import { redirect, useParams } from "react-router";
// function ModuleList() {
//     const { courseId } = useParams();
//     const modulesList = modules.filter((module) => module.course === courseId);
//     // const [selectedModule, setSelectedModule] = useState(modulesList[0]);
//     const [moduleList, setModuleList] = useState<any[]>(modules);

//     const [module, setModule] = useState({
//         _id: "0", name: "New Module",
//         description: "New Description",
//         course: courseId || "",
//       });


//     const addModule = (module: any) => {
//         console.log(module)
//         const newModule = {
//             ...module,
//             _id: new Date().getTime().toString()
//         };
//         const newModuleList = [newModule, ...moduleList];
//         setModuleList(newModuleList);
//         console.log(moduleList)
//     };

//     const deleteModule = (moduleId: string) => {
//         const newModuleList = moduleList.filter(
//             (module) => module._id !== moduleId);
//         setModuleList(newModuleList);
//     };

//     const updateModule = () => {
//         const newModuleList = moduleList.map((m) => {
//             console.log(module)
//             if (m._id === module._id) {
//                 return module;
//             } else {
//                 return m;
//             }
//         });
//         setModuleList(newModuleList);
//     };





//     return (
//         <>
//             {/* <!-- Add buttons here --> */}

//             <div >
//                 <div className="wd-button">
//                     <button type="button" className="btn btn-secondary me-2" style={{ color: 'black', background: 'lightgray' }}>
//                         Collapse All
//                     </button>

//                     <button type="button" className="btn btn-secondary me-2" style={{ color: 'black', background: 'lightgray' }}>
//                         View Progress
//                     </button>

//                     <button type="button" className="btn btn-secondary me-2" style={{ color: 'black', background: 'lightgray' }} >
//                         <FaCheckCircle className="me-2" style={{ color: 'green' }} />
//                         <select style={{ color: 'black', background: 'lightgray' }}>
//                             <option> Publish All</option>
//                             <option>Publish All Modules and Items</option>
//                             <option>Publish Modules Only</option>
//                             <option>Unpublish All</option>
//                         </select>
//                     </button>

//                     <button type="button" className="btn btn-secondary me-2" style={{ color: 'white', background: 'red' }}>+ Module</button>

//                     <button type="button" className="btn btn-secondary me-2" style={{ background: 'lightgray' }}>
//                         <FaEllipsisV className="me-2" style={{ color: 'black' }} />
//                     </button>
//                 </div>
//                 {/* <hr /> */}

//             </div >

//             <hr className="flex-grow-1" />
//             <ul className="list-group wd-modules">
//                 <li className="list-group-item">
//                     <button onClick={updateModule}>
//                         Update
//                     </button>

//                     <button onClick={() => { addModule(module) }}>Add</button>

//                     <input value={module.name}
//                         onChange={(e) => setModule({
//                             ...module, name: e.target.value
//                         })}
//                     />
//                     <textarea value={module.description}
//                         onChange={(e) => setModule({
//                             ...module, description: e.target.value
//                         })}
//                     />
//                 </li>

//                 {modulesList.filter((module) => module.course === courseId)
//                     .map((module, index) => (
//                         <li key={index}
//                             className="list-group-item"


//                             onClick={() => setSelectedModule(module)}>

//                             <button
//                                 onClick={(event) => { setModule(module); }}>
//                                 Edit
//                             </button>

//                             <button
//                                 onClick={() => deleteModule(module._id)}>
//                                 Delete
//                             </button>

//                             <div>
//                                 <FaEllipsisV className="me-2" />
//                                 {module.name}
//                                 <span className="float-end">
//                                     <FaCheckCircle className="text-success" />
//                                     <FaPlusCircle className="ms-2" />
//                                     <FaEllipsisV className="ms-2" />
//                                 </span>
//                             </div>
//                             {selectedModule._id === module._id && (
//                                 <ul className="list-group">
//                                     {module.lessons?.map((lesson, index) => (
//                                         <li className="list-group-item" key={index}>
//                                             <FaEllipsisV className="me-2" />
//                                             {lesson.name}
//                                             <span className="float-end">
//                                                 <FaCheckCircle className="text-success" />
//                                                 <FaEllipsisV className="ms-2" />
//                                             </span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </li>
//                     ))}
//             </ul>
//         </>
//     );
// }
// export default ModuleList;









import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();






    return (

        <><div>
            <div className="wd-button">
                <button type="button" className="btn btn-secondary me-2" style={{ color: 'black', background: 'lightgray' }}>
                    Collapse All
                </button>

                <button type="button" className="btn btn-secondary me-2" style={{ color: 'black', background: 'lightgray' }}>
                    View Progress
                </button>

                <button type="button" className="btn btn-secondary me-2" style={{ color: 'black', background: 'lightgray' }}>
                    <FaCheckCircle className="me-2" style={{ color: 'green' }} />
                    <select style={{ color: 'black', background: 'lightgray' }}>
                        <option> Publish All</option>
                        <option>Publish All Modules and Items</option>
                        <option>Publish Modules Only</option>
                        <option>Unpublish All</option>
                    </select>
                </button>

                <button type="button" className="btn btn-secondary me-2" style={{ color: 'white', background: 'red' }}>+ Module</button>

                <button type="button" className="btn btn-secondary me-2" style={{ background: 'lightgray' }}>
                    <FaEllipsisV className="me-2" style={{ color: 'black' }} />
                </button>
            </div>
            {/* <hr /> */}

        </div>

            <hr className="flex-grow-1" />

            <ul className="list-group ">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" className="form-control mb-2" value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button type="button" className="btn btn-success me-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                            <button type="button" className="btn btn-primary me-2" onClick={() => dispatch(updateModule(module))}>Update</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <textarea className="form-control" rows={4} value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}></textarea>
                        </div>
                    </div>
                </li>
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (

                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <FaEllipsisV className="me-2" />


                                <h2>{module.name}</h2>
                                <p>{module.description}</p>
                            </div>
                            <div className="d-flex ">
                            <span className="d-flex justify-content-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                                <button
                                    className="btn btn-success me-2"
                                    onClick={() => dispatch(setModule(module))}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => dispatch(deleteModule(module._id))}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
            </ul></>
    );
}
export default ModuleList;
