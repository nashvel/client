import React from "react";
import { Link } from "react-router-dom";

interface SidemenuProps {
    customStyle?: React.CSSProperties;
}

const SIDEBAR_SECTIONS = [
    {
        title: "Main",
        links: [{ to: "/", icon: "bi-speedometer2", label: "Dashboard" }],
    },
    {
        title: "",
        links: [
            { to: "/manage-food", icon: "bi-building", label: "Manage Food" },
            { to: "/theme", icon: "bi-palette", label: "Themes" },
        ],
    },
    {
        title: "",
        links: [
            { to: "/chat-admin", icon: "bi-chat-dots-fill", label: "Chat to Admin" },
            { to: "/promo", icon: "bi-megaphone-fill", label: "Add Promo" },
            { to: "/sales", icon: "bi-megaphone-fill", label: "View Sales" },
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
                            <i className={`w-5 h-4 side-menu__icon bi ${link.icon}`} style={{ marginRight: "8px" }}></i>
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // Keeps content higher
                paddingTop: "50px", // Adjust upward movement
                ...customStyle,
            }}
        >
            {/* Title Section */}
            <div style={{ textAlign: "center", marginBottom: "15px" }}> {/* Adjusted margin for spacing */}
                <span
                    style={{
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#333",
                        letterSpacing: "2px",
                    }}
                >
                    Multi Food Cuisine
                </span>
            </div>

            {/* Sidebar Sections */}
            <nav className="main-menu-container nav nav-pills flex-col sub-open" style={{ width: "100%" }}>
                <ul className="main-menu" style={{ listStyleType: "none", padding: "0", width: "100%" }}>
                    {renderSidebarSections()}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidemenu;
