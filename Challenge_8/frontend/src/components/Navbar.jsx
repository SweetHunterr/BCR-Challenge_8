import Logo from '../images/logo.png'
import '../style/style.css'

const Navbar = () => {
  return (
    <div className="container-fluid" id="my-navbar">
      <div className="row">
        <div className="col-3 area-logo">
          <img src={Logo} />
        </div>
        <div className="col-9 area-menu">
          <ul>
            <li><a href="#our-services">Our Services</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><button type="button" className="btn btn-limegreen">Register</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
