import React from "react";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

interface SidemenuProps {
    customStyle?: React.CSSProperties;
}

const Sidemenu: React.FC<SidemenuProps> = ({ customStyle }) => {
    return (
        <aside
            className="app-sidebar"
            id="sidebar"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #ffffff, #e3f2fd, #e3f2fd)",
                ...customStyle, 
            }}
        >
            <div className="main-sidebar" id="sidebar-scroll">
                <nav className="main-menu-container nav nav-pills flex-col sub-open">
                    <ul className="main-menu">
                        <li>
                            <a href="">
                                <center>
                                    <img src={logo} className="transparent-shadow" style={{ maxHeight: "150px" }} />
                                </center>
                            </a>
                        </li>
                        <li>
                            <hr className="mt-3" />
                        </li>

                        {/* Main */}
                        <li className="slide__category">
                            <span className="category-name">Main</span>
                        </li>
                        <li className="slide">
                            <Link to="/" className="side-menu__item">
                                <i className="w-6 h-4 side-menu__icon bi bi-speedometer2"></i>
                                <span className="side-menu__label">Dashboard &ensp;</span>
                            </Link>
                        </li>

                        {/* Admin Panel */}
                        <li className="slide__category">
                            <span className="category-name">Admin Panel</span>
                        </li>
                        <li className="slide">
                            <Link to="/active-users" className="side-menu__item">
                                <i className="w-6 h-4 side-menu__icon bi bi-people-fill"></i>
                                <span className="side-menu__label">Active Users</span>
                            </Link>
                        </li>
                        <li className="slide">
                            <Link to="/manage-businesses" className="side-menu__item">
                                <i className="w-6 h-4 side-menu__icon bi bi-building"></i>
                                <span className="side-menu__label">Manage Businesses</span>
                            </Link>
                        </li>
                        <li className="slide">
                            <Link to="/theme-editor" className="side-menu__item">
                                <i className="w-6 h-4 side-menu__icon bi bi-palette"></i>
                                <span className="side-menu__label">Theme Editor</span>
                            </Link>
                        </li>

                        {/* Communication */}
                        <li className="slide__category">
                            <span className="category-name">Communication</span>
                        </li>
                        <li className="slide">
                            <Link to="/chat-clients" className="side-menu__item">
                                <i className="w-6 h-4 side-menu__icon bi bi-chat-dots-fill"></i>
                                <span className="side-menu__label">Chat to Clients</span>
                            </Link>
                        </li>
                        <li className="slide">
                            <Link to="/announcements" className="side-menu__item">
                                <i className="w-6 h-4 side-menu__icon bi bi-megaphone-fill"></i>
                                <span className="side-menu__label">Announcements</span>
                            </Link>
                        </li>

                        {/* Developer Tools */}
                        <li className="slide__category">
                            <span className="category-name">Developer Tools</span>
                        </li>
                        <li className="slide">
                            <Link to="/api-logs" className="side-menu__item">
                                <i className="w-6 h-4 side-menu__icon bi bi-file-code-fill"></i>
                                <span className="side-menu__label">API & Logs</span>
                            </Link>
                        </li>
                        <li className="slide">
                            <Link to="/performance-monitor" className="side-menu__item">
                                <i className="w-6 h-4 side-menu__icon bi bi-graph-up"></i>
                                <span className="side-menu__label">Performance Monitor</span>
                            </Link>
                        </li>

                        {/* System Settings */}
                        <li className="slide__category">
                            <span className="category-name">System Settings</span>
                        </li>
                        <li className="slide">
                            <Link to="/settings" className="side-menu__item">
                                <i className="w-6 h-4 side-menu__icon bi bi-gear-fill"></i>
                                <span className="side-menu__label">General Settings</span>
                            </Link>
                        </li>
                        <li className="slide">
                           <Link to="/github-repo" className="side-menu__item">
                                <i className="w-6 h-4 side-menu__icon bi bi-github"></i>
                                <span className="side-menu__label">GitHub Repository</span>
                           </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidemenu;
