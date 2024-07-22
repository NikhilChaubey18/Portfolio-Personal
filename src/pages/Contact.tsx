import { SocialIcon } from "react-social-icons"
import { Link } from "react-router-dom"


const Contact = () => {



    return (
    
        <div className=" ">
                  
            <div className="grid md:grid-cols-2 gap-11 ">
            <div className="flex flex-col items-center mt-3">
                        <span className="text-4xl mb-2"><img className="" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="80px" /></span>
                        <span className="text-4xl mb-2">Contact Me</span>
                        <p className="  text-lg text-center text-gray-600">You can contact me at the places mentioned below. I will try to get back to you as fast as I can.</p>
                        <div className="flex gup gap-3 mt-1">
      <SocialIcon url="https://github.com/NikhilChaubey18" className="pag" bgColor="#333" fgColor="#fff" />
      <SocialIcon url="https://www.linkedin.com/in/nikhil-chaubey-4b5859227/" bgColor="#0077B5" fgColor="#fff" />
      <SocialIcon url="mailto:nikhilch1804@gmail.com" bgColor="#7f7f7f" fgColor="#fff" />
      {/* Add more social icons as needed */}
      
    </div>
    <Link to= "/resume" className=" button1 flex flex-col mt-4">
        See my Resume
     </Link>
    </div>
                <img className="project1" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHFtYm1oZXh0NHVycW03Mm96OGpseHF6bDc5ZG54eG85eGkxcDNodiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bGgsc5mWoryfgKBx1u/giphy.gif"></img>
                <div>
               
                    </div>
                </div>
                
                </div>
                
            


)}

export default Contact