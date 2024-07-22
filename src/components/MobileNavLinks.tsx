import { Link } from "react-router-dom";
import { FC } from 'react';

type MobileNavLinksProps = {
  onLinkClick: () => void;
};

const MobileNavLinks: FC<MobileNavLinksProps> = ({ onLinkClick }) => {
  return (
    <>
      <Link onClick={onLinkClick}
        to="/profile"
        className="flex bg-white items-center font-bold hover:text-sky-500"
      >
        Profile
      </Link>
      <Link onClick={onLinkClick}
        to="/project"
        className="flex bg-white items-center font-bold hover:text-sky-500"
      >
        Project
      </Link>
      <Link onClick={onLinkClick}
        to="/about"
        className="flex bg-white items-center font-bold hover:text-sky-500"
      >
        Education
      </Link>
      <Link onClick={onLinkClick}
        to="/resume"
        className="flex bg-white items-center font-bold hover:text-sky-500"
      >
        Resume
      </Link>
      <Link onClick={onLinkClick}
        to="/contact"
        className="flex bg-white items-center font-bold hover:text-sky-500"
      >
        Contact
      </Link>
    </>
  );
};

export default MobileNavLinks;


