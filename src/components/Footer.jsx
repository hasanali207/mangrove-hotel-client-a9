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
   <div> <a className="link link-hover">CoxBazar, Chitagang, Bangladesh</a></div>
    <a className="link link-hover">mangrovehotel@gmail.com</a>
    <a className="link link-hover">+99601548762</a>
  </nav>
</footer> 
<footer className="footer px-10 py-4 border-t bg-black text-white border-base-300">
  <aside className="items-center grid-flow-col">
    
    <p>Mangrove Hotel Ltd. <br/>Providing reliable tech since 2024</p>
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