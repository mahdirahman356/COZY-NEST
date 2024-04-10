import { BiBuildingHouse } from "react-icons/bi";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content mt-16">
  <aside>
    <p className="text-xl font-semibold footer-title flex items-center"><BiBuildingHouse />  CozyNest</p>
    <p className="">Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">SERVICES</h6> 
    <a className="link link-hover">Property Search Assistance</a>
    <a className="link link-hover">Virtual Tours</a>
    <a className="link link-hover">Financing Options</a>
    <a className="link link-hover">Personalized Consultations</a>
  </nav> 
  <nav>
    <h6 className="footer-title">COMPANY</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    )
}

export default Footer