import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="bg-gray-400 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="text-2xl text-white font-sans antialiased font-semibold tracking-tight">
            Made by Nikhil 
          </span>
          <span className="text-white font-sans antialiased font-semibold tracking-tight flex gap-4">
          <Link to="mailto:nikhilch1804@gmail.com" className="font-bold hover:text-sky-500  ">
        nikhilch1804@gmail.com
          </Link>
     
          </span>
        </div>
      </div>
    );
  };
  
  export default Footer;
  