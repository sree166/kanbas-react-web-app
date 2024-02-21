import ModuleList from "../Modules/List";
import { FaCheckCircle, FaEllipsisV, FaBell, FaFileImport, FaArrowAltCircleLeft, FaGgCircle, FaChartBar, FaBlenderPhone} from "react-icons/fa";


function Home() {
    return (
        <div className="d-flex row">

            <div className="col-lg-8">
                <ModuleList />
            </div>

            <div className="col-lg-4 d-lg-block d-none">
                <div>
                    <ul className="no-bullets">
                        <li>
                            <button className="btn btn-secondary me-2 no-link">
                            <FaFileImport className="me-2" style={{ color: 'black'}} />
                                <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Import Existing Content</a>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary me-2 no-link">
                            <FaArrowAltCircleLeft className="me-2" style={{ color: 'black'}} />
                                <a href="#">Import from Commons</a>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary me-2 no-link">
                            <FaGgCircle className="me-2" style={{ color: 'black'}} />
                                <a href="#">Choose Home Page</a>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary me-2 no-link">
                            <FaChartBar className="me-2" style={{ color: 'black'}} />
                                <a href="#">View Course Stream</a>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary me-2 no-link">
                            <FaBlenderPhone className="me-2" style={{ color: 'black'}} />
                                <a href="#">New Announcement</a>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary me-2 no-link">
                            <FaChartBar className="me-2" style={{ color: 'black'}} />
                                <a href="#">New Analytics</a>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary me-2 no-link">
                            <FaBell className="me-2" style={{ color: 'black'}} />
                                <a href="#">View Course Notifications</a>
                            </button>
                        </li>
                    </ul>

                    <h5>To Do</h5>
                    <hr />
                    <i className="fa fa-exclamation" style={{ color: 'red' }} aria-hidden="true"></i>
                    <a href="#" style={{ color: 'red' }}> Grade A1 - ENV + HTML</a>
                    <p className="small-grey-text">100 points . September 18th at 11:59</p>

                    <h5>Coming Up &nbsp; &nbsp; &nbsp;<i className="fa fa-calendar" aria-hidden="true"></i>
                        <span style={{ fontSize: 12, color: 'red' }}>View Calendar </span>
                    </h5>
                    <hr />
                    <ul className="redlink">
                        <li> <i className="fa fa-calendar" aria-hidden="true"></i><a href="#"> Lecture 1 CS4550.12631.202410
                            Sep 7 at 11:45am</a></li>
                        <li> <i className="fa fa-calendar" aria-hidden="true"></i><a href="#"> Lecture 2 CS4550.12631.202410
                            Sep 11 at 11:45am</a></li>
                        <li><i className="fa fa-calendar" aria-hidden="true"></i><a href="#"> Lecture 3 CS5610 06 SP23
                            Lecture Sep 11 at 6pm</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Home;

