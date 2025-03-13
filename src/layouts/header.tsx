import React, { useState, useEffect, useRef } from "react";

interface HeaderProps {
    customStyle?: {
        background?: string;
        color?: string;
        height?: string;
        width?: string;
    };
}

const Header: React.FC<HeaderProps> = ({ customStyle }) => {
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsHidden(true); // Hide when scrolling down
            } else {
                setIsHidden(false); // Show when scrolling up
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="app-header sticky"
            id="header"
            style={{
                background: customStyle?.background || "linear-gradient(135deg, #ffffff, #f8e1e7, #d9e7ff, #fff7db)",
                color: customStyle?.color || "inherit",
                height: customStyle?.height || "70px",
                width: customStyle?.width || "70%",
                maxWidth: "100vw",
                left: "15%",
                right: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "8px 20px",
                position: "fixed",
                top: isHidden ? "-80px" : "0", // Moves header up when hidden
                zIndex: "1000",
                transition: "top 0.3s ease-in-out",
            }}
        >
            <div className="main-header-container container-fluid">
                <div className="header-content-left d-flex align-items-center">
                    {/* Logo */}
                    <div className="header-element">
                        <div className="horizontal-logo">
                            <a href="index.html" className="header-logo">
                                <img
                                    src="/assets/images/brand-logos/desktop-logo.png"
                                    alt="logo"
                                    className="desktop-logo"
                                    style={{ maxHeight: "40px", borderRadius: "8px" }}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Sidebar Toggle Button */}
                    <div className="header-element mx-lg-2">
                        <button
                            aria-label="Hide Sidebar"
                            className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                            onClick={() => setIsHidden((prev) => !prev)}
                        >
                            <span></span>
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="header-element header-search md:!block !hidden my-auto auto-complete-search">
                        <input
                            type="text"
                            className="header-search-bar form-control"
                            id="header-search"
                            placeholder="Search anything here ..."
                            style={{
                                borderRadius: "8px",
                                padding: "8px 12px",
                                border: "1px solid rgba(0, 0, 0, 0.2)",
                            }}
                        />
                        <a href="#" className="header-search-icon border-0">
                            <i className="ri-search-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
