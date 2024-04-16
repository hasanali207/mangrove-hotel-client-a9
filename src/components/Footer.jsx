import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";



const Footer = () => {
    return (
        <>
           <footer className="footer p-10 mt-20 bg-black text-white">
  <nav>
    <h1 className="text-3xl font-medium">Mangrove Hotel</h1> 
    <p className="text-sm">Founded in 2024, <br /> CozyStay Resort is located on the hills of CoxBazar, <br></br> immersing you in the wonder of the Swiss Alps <br></br> against the pure sky. Welcome to CozyStay, Zermatt.</p>
  </nav> 
  <nav>
    <h6 className="footer-title">About Us</h6> 
    <a className="link link-hover">Our Story</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Premium Services</a>
    <a className="link link-hover">Blog</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Experiences</h6> 
    <a className="link link-hover">Dining</a>
    <a className="link link-hover">Spa & Wellness</a>
    <a className="link link-hover">Local & Activities</a>
    <a className="link link-hover">Meeting</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Reach Out</h6> 
    <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Cox-Bazar, Chattogram, Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+88956417875</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>mangrovehotel@business.com</span>
              </p>
            </div>
  </nav>
</footer> 
<footer className="footer px-10 py-4 border-t bg-black text-white border-base-300">
  <aside className="items-center grid-flow-col">
    
    <p>Mangrove Hotel Ltd. <br/>Providing reliable services since 2024</p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a><FaFacebook className="w-6 h-6"></FaFacebook></a>
      <a><AiFillTwitterCircle className="w-6 h-6"></AiFillTwitterCircle></a>
    </div>
  </nav>
</footer> 
        </>
    );
};

export default Footer;