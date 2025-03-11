interface HeaderProps {
    customStyle?: {
        background?: string;
        color?: string; // ✅ Use "color" instead of "textColor"
    };
}

const Header: React.FC<HeaderProps> = ({ customStyle }) => {
    return (
        <header
            className="app-header sticky"
            id="header"
            style={{
                background: customStyle?.background || 'linear-gradient(135deg, #ffffff, #e3f2fd, #d1c4e9)',
                color: customStyle?.color || 'inherit', // ✅ Corrected property
            }}
        >
            <div className="main-header-container container-fluid">
                <div className="header-content-left">
                    <div className="header-element">
                        <div className="horizontal-logo">
                            <a href="index.html" className="header-logo">
                                <img
                                    src="/assets/images/brand-logos/desktop-logo.png"
                                    alt="logo"
                                    className="desktop-logo"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="header-element mx-lg-0">
                        <a
                            aria-label="Hide Sidebar"
                            className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                            data-bs-toggle="sidebar"
                            href="javascript:void(0);"
                        >
                            <span></span>
                        </a>
                    </div>

                    <div className="header-element header-search md:!block !hidden my-auto auto-complete-search">
                        <input
                            type="text"
                            className="header-search-bar form-control"
                            id="header-search"
                            placeholder="Search anything here ..."
                        />
                        <a href="javascript:void(0);" className="header-search-icon border-0">
                            <i className="ri-search-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
