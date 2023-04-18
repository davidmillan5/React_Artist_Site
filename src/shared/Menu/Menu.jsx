import './Menu.css';
export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Rayden
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Bio">
                  Bio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Discography">
                  Discography
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Concerts">
                  Concerts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
