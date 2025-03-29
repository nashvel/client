import React, { useState, useEffect } from "react";
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
            { to: "/sales", icon: "bi-cash-stack", label: "View Sales" },
        ],
    },
];

const Sidemenu: React.FC<SidemenuProps> = ({ customStyle }) => {
    const [isOpen, setIsOpen] = useState(false); // Always closed initially
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);
    const [isScrolling, setIsScrolling] = useState(false);
    let scrollTimeout: number;

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 400;
            setIsMobile(mobile);
            setIsOpen(!mobile); // Only open in desktop mode
        };

        handleResize(); // Ensure correct state when component mounts
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 300); // Grows back after 300ms
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* 🟢 Floating Toggle Button (Only in Mobile) */}
            {isMobile && !isOpen && (
                <button
                    onClick={toggleSidebar}
                    style={{
                        position: "fixed",
                        top: "10px",
                        left: "0px",
                        background: "linear-gradient(135deg, #ffffff, #f8e1e7, #ffffff)",
                        border: "none",
                        padding: isScrolling ? "5px 6px" : "10px 12px",
                        fontSize: isScrolling ? "12px" : "18px",
                        cursor: "pointer",
                        zIndex: 1001,
                        borderRadius: "50%",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.3s ease-in-out",
                        opacity: isScrolling ? "0" : "1",
                    }}
                >
                    <i className="bi bi-list"></i>
                </button>
            )}

            {/* 🟢 Sidebar Drawer */}
            <aside
                id="sidebar"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    minHeight: "100vh",
                    width: isOpen ? "260px" : isMobile ? "0" : "260px",
                    background: "linear-gradient(135deg, #ffffff, #f8e1e7, #d9e7ff, #fff7db)",
                    borderRadius: isMobile ? "0 12px 12px 0" : "12px",
                    padding: isOpen ? "16px" : "0",
                    marginRight: "10px",
                    display: isOpen || !isMobile ? "flex" : "none",
                    flexDirection: "column",
                    transition: "transform 0.3s ease-in-out",
                    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                    boxShadow: isOpen ? "4px 0 10px rgba(0, 0, 0, 0.1)" : "none",
                    zIndex: 1000,
                    overflow: "hidden",
                    ...customStyle,
                }}
            >
                {/* 🟢 Sidebar Title */}
                <div style={{ textAlign: "center", marginBottom: "20px", padding: "10px 0" }}>
                    <span
                        style={{
                            fontFamily: "'Dancing Script', cursive",
                            fontSize: "22px",
                            fontWeight: "bold",
                            color: "#333",
                            letterSpacing: "1px",
                        }}
                    >
                        Multi Food Cuisine
                    </span>
                </div>

                {/* 🟢 Sidebar Links */}
                <nav style={{ width: "100%" }}>
                    <ul style={{ listStyleType: "none", padding: "0", width: "100%" }}>
                        {SIDEBAR_SECTIONS.map((section, index) => (
                            <React.Fragment key={index}>
                                <li
                                    style={{
                                        listStyleType: "none",
                                        padding: "10px 0",
                                        fontWeight: "bold",
                                        fontSize: "14px",
                                        color: "#444",
                                    }}
                                >
                                    <span>{section.title}</span>
                                </li>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} style={{ listStyleType: "none", padding: "10px 0" }}>
                                        <Link
                                            to={link.to}
                                            onClick={() => isMobile && setIsOpen(false)}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                textDecoration: "none",
                                                color: "#333",
                                                padding: "12px",
                                                borderRadius: "8px",
                                                transition: "background 0.2s",
                                                fontSize: "16px",
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
                                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                        >
                                            <i className={`bi ${link.icon}`} style={{ marginRight: "10px", fontSize: "18px" }}></i>
                                            <span>{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* 🟢 Mobile Overlay to Close Sidebar */}
            {isMobile && isOpen && (
                <div
                    onClick={toggleSidebar}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        background: "rgba(0, 0, 0, 0.5)",
                        zIndex: 999,
                    }}
                ></div>
            )}
        </>
    );
};

export default Sidemenu;
