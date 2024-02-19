import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <div className="w-full h-14 bg-slate-200 flex justify-between items-center px-4 text fixed z-10 border-b-2 border-black">
      <div className="flex flex-col justify-center items-center font-bold ">
        <img className="h-10 mix-blend-darken" src="/images/logo.jpg" />
      </div>
      <ul className="md:flex md:flex-row md:justify-center md:items-center md:font-semibold hidden">
        <li className="px-3 ">
          <Link className="hover:border-b-4 border-red-500" to="#Home">Home</Link>
        </li>
        <li className="px-3 ">
          <Link className="hover:border-b-4 border-red-500" to="#About">About Us</Link>
        </li>
        <li className="px-3 ">
          <Link className="hover:border-b-4 border-red-500" to="#Services">Our Services</Link>
        </li>
      </ul>
      <button className=" hidden md:block bg-red-600 text-white px-2 py-2 rounded-lg font-semibold ">
        <Link to="#Contact">Contact Us</Link>
      </button>
      <div className="md:hidden mb-2" onClick={toggleMobileMenu}>
        <a className="text-4xl" href="#">
          &#8801;
        </a>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-slate-200 text-center">
          <ul className="py-4">
            <li className="py-2">
              <Link className="hover:border-b-4 border-red-500" smooth to="#Home" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:border-b-4 border-red-500" smooth to="#About" onClick={toggleMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:border-b-4 border-red-500" smooth to="#Services" onClick={toggleMobileMenu}>
                Our Services
              </Link>
            </li>
            <li className="py-2">
              <Link className="hover:border-b-4 border-red-500" smooth to="#Contact" onClick={toggleMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
