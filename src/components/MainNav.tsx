
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "./ui/button";
// import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
 

  return (
    <span className="flex space-x-2 items-center gap-11">
    
        <>
          <Link to="/profile" className="font-bold hover:text-sky-500 ">
          Profile
          </Link>
          <Link to="/project" className="font-bold hover:text-sky-500 ">
        Project
          </Link>
          <Link to="/about" className="font-bold hover:text-sky-500 " >
      Education
          </Link>
          <Link to="/resume" className="font-bold hover:text-sky-500 ">
         Resume
          </Link>
          <Link to="/contact" className="font-bold hover:text-sky-500 ">
         Contact
          </Link>
        
       
        </>

    
    </span>
  );
};

export default MainNav;