const Navbar = () => (
    <div className="header">
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-md justify-content-between navbar-light">
            <div className="nav-info"><a className="navbar-brand" href="/">Anne Schouler</a><span className="tagline">Interior Designer and Painter</span></div>
            <ul className="nav navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Projects
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/interior-design">Interior Design</a></li>
                        <li><a className="dropdown-item" href="/paintings">Paintings</a></li>
                        <li><a className="dropdown-item" href="/frescoes">Frescoes</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="modal" href="#modal" role="button">Contact</a>
                </li>
            </ul>

            <button className="navbar-toggler sidebar__button" id="openSidebar" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
        {/* Mobile Sidebar */}
        <div id="sidebarDiv" className="sidebar sidebarDiv">
            <button id="closeSidebar" className="btn-close"></button>
            <ul className="sidebar__list">
                <li className="sidebar-main"><a className="nav-link" href="/">Projects</a>
                    <ul className="sidebar-secondary-list">
                        <li className="sidebar-secondary"><a className="nav-link" href="/interior-design">Interior Design</a></li>
                        <li className="sidebar-secondary"><a className="nav-link" href="/paintings">Paintings</a></li>
                        <li className="sidebar-secondary"><a className="nav-link" href="/frescoes">Frescoes</a></li>
                    </ul>
                </li>
                <li className="sidebar-main"><a className="nav-link" href="/about">About</a></li>
                <li className="sidebar-main"><a className="nav-link" href="">Contact</a></li>
            </ul>
        </div>
        {/* Contact modal box */}
        <div className="modal fade" id="modal" aria-hidden="true" aria-labelledby="..." tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <p><a href="mailto:">anneschouler@email.com</a></p>
                        <img className="p-4" src="/img/separator.png" alt="separator" />
                        <p>01.05.30.02.03</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Navbar;