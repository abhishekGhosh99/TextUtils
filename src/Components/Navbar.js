import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {props.home}
              </a>
            </li>
          </ul>
          <p className="my-2 mx-4">
            <b>Dark themes</b>
          </p>

          {/* Enable blue themed dark mode */}
          <button
            type="button"
            className="btn mx-1"
            onClick={() => {
              props.secondaryMode("secondary");
            }}
            style={{
              width: "36px",
              height: "36px",
              border: "2px solid white",
              cursor: "pointer",
              borderRadius: "50px",
              backgroundColor: "#162532",
            }}
          ></button>

          {/* Enable grey themed dark mode */}
          <button
            type="button"
            className="btn btn-dark mx-1"
            onClick={() => {
              props.darkMode("dark");
            }}
            style={{
              width: "36px",
              height: "36px",
              border: "2px solid white",
              cursor: "pointer",
              borderRadius: "50px",
              backgroundColor: "#323232",
            }}
          ></button>

          {/* Enable dark mode */}
          <div className="form-check mx-3 form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light"
                ? "Enable Dark Mode"
                : "Enable Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About Us",
};
