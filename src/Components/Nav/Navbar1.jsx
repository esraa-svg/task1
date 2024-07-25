import './Navbar1.css'
import '../Home'
function Navbar1() {
  return (
<nav className="navbar navbar-expand-lg navbar-light custom-navbar" style={{  fontFamily: "Lato", padding: ' 2rem',fontsize:20 }}>
  <div className="container-fluid ">
    <a className="navbar-brand text-white" href="#"  >STARTE REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span> 
    </button>
    <div className="collapse navbar-collapse justify-content-end  "  id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className=" nav-link active "  aria-current="page" href="#" style={{backgroundColor: '#28a745',color: 'white',
    border: '1px solid green',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    margin: '0.5rem 1rem'
  }}>PORTFOLIO</a>
        <a className="nav-link text-white"style={{ margin: '0.5rem 1rem' }} href="#"> ABOUT</a>
        <a className="nav-link text-white " href="#" style={{ margin: '0.5rem 1rem' }}>CONTACT</a>
      </div>
    </div>
  </div>
</nav>
  );
  
}
 


export default Navbar1;