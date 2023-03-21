import "./styles.scss";

const Header = () => {
    return (
       <nav className="navbar flex w-full align-center justify-between">
        <div className="nav-left">
            <h3 className="heading">CV Builder</h3>
        </div>
        <ul className="nav-right i-flex align-center">
            <li>Templates</li>
            <li>About</li>
        </ul>
       </nav>
    )
};

export default Header;