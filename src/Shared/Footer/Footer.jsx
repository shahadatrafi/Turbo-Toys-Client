import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer p-10 ps-2 bg-base-100  text-base-content">
            <div>
                <Link>
                    <a className="normal-case text-3xl font-semibold"><span className="text-primary">Turbo</span> Toys</a>
                </Link>
                <div className="flex text-3xl gap-4 mt-8 text-primary">
                    <Link><FaFacebookSquare></FaFacebookSquare></Link>
                    <Link><FaTwitterSquare></FaTwitterSquare></Link>
                    <Link><FaLinkedin></FaLinkedin></Link>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <ul>
                    <li className="my-2"><Link >Home</Link></li>
                    <li className="my-2"><Link >All Toys</Link></li>
                    <li className="my-2"><Link >Blogs</Link></li>
                    <li className="my-2"><Link >Specials Offers</Link></li>
                </ul>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <ul>
                <li className="my-2"><Link>About us</Link></li>
                <li className="my-2"><Link>Contact</Link></li>
                <li className="my-2"><Link>Terms & Conditions</Link></li>
                <li className="my-2"><Link>Delivery Information</Link></li>
                </ul>
            </div>
            <div>
                <span className="footer-title">Contact Us</span>
                <ul>
                <li className="my-2 flex items-center gap-2"><FaMapMarkerAlt className="text-xl text-primary"></FaMapMarkerAlt><Link>129 Street, San Francisco, CA <br></br>94110 Unicon Center, US</Link></li>
                <li className="my-2 flex items-center gap-2"><FaEnvelope className="text-xl text-primary"></FaEnvelope><Link>contact@turbotoys.com</Link></li>
                <li className="my-2 flex items-center gap-2"><FaPhoneAlt className="text-xl text-primary"></FaPhoneAlt><Link>(+01) 123 456 7890</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;