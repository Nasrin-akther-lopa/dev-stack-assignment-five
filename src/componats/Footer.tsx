
import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='bg-base-400 border-t'>
        
            <footer className="footer container mx-auto  sm:footer-horizontal  text-base-content p-10">
  <aside>
    <img src={logo} alt="" />
    <p className='font-semibold text-gray-500 '>
     Curated tools, technologies, and resources for developers building <br />
modern software.
    </p>
  <p className='font-bold text-lg '> GitHub Twitter LinkedIn</p>
  </aside>
  <nav>
    <h6 className="footer-title">PRODUCT</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Technologies</a>
    <a className="link link-hover">Projects</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">COMPANY</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Careers</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">LEGAL</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms of Service</a>
   
  </nav>
  
</footer>
        </div>
    );
};

export default Footer;