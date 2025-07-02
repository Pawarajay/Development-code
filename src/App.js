import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Only if using Bootstrap via npm

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Work Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <h1>Ajay Anant Pawar</h1>
        <img src="/profile.jpg" alt="Profile" className="profile-img" />
        <p className="mt-3 px-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quaerat at maiores consequuntur voluptate veritatis atque deserunt maxime iusto blanditiis cum cumque dolorem, praesentium earum autem ut molestias quasi adipisci!
        </p>
      </header>
    </div>
  );
}

export default App;
