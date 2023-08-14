import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Service">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Contact</a>
        </li>
        
       
      </ul>
      {/* <form class="d-flex" role="search">
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
      </form> */}
    </div>
    <br></br>
  </div>
</nav>
      
      
      
      
      
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;