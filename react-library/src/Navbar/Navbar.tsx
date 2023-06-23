export const Navbar = () => {
     return ( 
     <nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid">
            <span className="navbar-brand">Book store</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDropdown"
             aria-controls="navbarDropdown" aria-expanded="false" aria-label="Collapse Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarDropDown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">HOME</a>
                    </li>
                </ul>
            </div>
        </div>
     </nav>
     );
};