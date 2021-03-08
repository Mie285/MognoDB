import React, { Component} from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercises Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Creat User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;