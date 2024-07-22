import { Link } from "react-router-dom";



const MobileNavLinks = () => {
  
  return (
    <>
      <Link
        to="/profile"
        className="flex bg-white items-center font-bold hover:text-sky-500 "
      >
       Profile
      </Link>
      <Link
        to="/project"
        className="flex bg-white items-center font-bold hover:text-sky-500 "
      >Project
      </Link>
      <Link
        to="/about"
        className="flex bg-white items-center font-bold hover:text-sky-500 "
      >
       Education
      </Link>
      <Link
        to="/resume"
        className="flex bg-white items-center font-bold hover:text-sky-500 "
      >Resume
      </Link>
      <Link
        to="/contact"
        className="flex bg-white items-center font-bold hover:text-sky-500 "
      >Contact
      </Link>
    
     
    </>
  );
};

export default MobileNavLinks;
