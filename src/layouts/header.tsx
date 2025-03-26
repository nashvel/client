import React, { useState } from "react";
import "./header.css";

const Header: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <header className={`app-header ${isExpanded ? "expanded" : ""}`}>
            {/* Sidebar Toggle */}
            <button className="sidemenu-toggle">☰</button>

            {/* Search Bar */}
            <input type="text" className="search-bar" placeholder="Search..." />


            <div className="profile-icon" onClick={toggleExpand}>
                {isExpanded ? "O" : "O"}
            </div>

            {/* Logout Button (Now Comes Out From Lock) */}
            <div className="logout-menu">
                <button className="logout-button">Logout</button>
            </div>
        </header>
    );
};

export default Header;
