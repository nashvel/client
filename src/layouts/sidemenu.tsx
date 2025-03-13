import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

interface SidemenuProps {
    customStyle?: React.CSSProperties;
}

const SIDEBAR_SECTIONS = [
    {
        title: "Main",
        links: [{ to: "/", icon: "bi-speedometer2", label: "Dashboard" }],
    },
    {
        title: "Admin Panel",
        links: [
            { to: "/active-users", icon: "bi-people-fill", label: "Active Users" },
            { to: "/manage-businesses", icon: "bi-building", label: "Manage Businesses" },
            { to: "/theme-editor", icon: "bi-palette", label: "Theme Editor" },
        ],
    },
    {
        title: "Communication",
        links: [
            { to: "/chat-clients", icon: "bi-chat-dots-fill", label: "Chat to Clients" },
            { to: "/announcements", icon: "bi-megaphone-fill", label: "Announcements" },
        ],
    },
    {
        title: "Developer Tools",
        links: [
            { to: "/api-logs", icon: "bi-file-code-fill", label: "API & Logs" },
            { to: "/performance-monitor", icon: "bi-graph-up", label: "Performance Monitor" },
        ],
    },
    {
        title: "System Settings",
        links: [
            { to: "/settings", icon: "bi-gear-fill", label: "General Settings" },
            { to: "/github-repo", icon: "bi-github", label: "GitHub Repository" },
        ],
    },
];

const Sidemenu: React.FC<SidemenuProps> = ({ customStyle }) => {
    const renderSidebarSections = () =>
        SIDEBAR_SECTIONS.map((section, index) => (
            <React.Fragment key={index}>
                <li className="slide__category" style={{ listStyleType: "none" }}>
                    <span className="category-name">{section.title}</span>
                </li>
                {section.links.map((link, linkIndex) => (
                    <li className="slide" key={linkIndex} style={{ listStyleType: "none" }}>
                        <Link to={link.to} className="side-menu__item">
                            <i className={`w-5 h-4 side-menu__icon bi ${link.icon}`}></i>
                            <span className="side-menu__label">{link.label}</span>
                        </Link>
                    </li>
                ))}
            </React.Fragment>
        ));

    return (
        <aside
            className="app-sidebar"
            id="sidebar"
            style={{
                minHeight: "100vh",
                width: "240px",
                background: "linear-gradient(135deg, #ffffff, #f8e1e7, #d9e7ff, #fff7db)",
                borderRadius: "12px",
                padding: "12px",
                marginRight: "10px",
                ...customStyle,
            }}
        >
            {/* Line Break before Dancing Text */}
            <div style={{ textAlign: "center", marginBottom: "10px", marginTop: "-15px" }}>
                <span
                    style={{
                        fontFamily: "'Dancing Script', cursive", // Apply Dancing Script font
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#333", // Darker color for contrast
                        letterSpacing: "2px",
                    }}
                >
                    <br />
                    Multi Food Cuisine
                </span>
            </div>

            {/* Logo Section */}
            <li style={{ marginBottom: "5px", listStyleType: "none" }}>
                <Link to="/">
                    <center>
                        <img
                            src={logo}
                            className="transparent-shadow"
                            alt="App Logo"
                            style={{
                                maxHeight: "80px",
                                borderRadius: "8px",
                                padding: "5px",
                            }}
                        />
                    </center>
                </Link>
            </li>

            <li style={{ listStyleType: "none" }}>
                <hr className="mt-2 mb-2" />
            </li>

            {/* Sidebar Sections */}
            <nav className="main-menu-container nav nav-pills flex-col sub-open">
                <ul className="main-menu" style={{ listStyleType: "none" }}>
                    {renderSidebarSections()}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidemenu;
