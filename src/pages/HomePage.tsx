
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


  const HomePage = () => {
 

 
  return (<>
    <div className=" ">
      {/* <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-green-500">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
       
      </div> */}
      <div className="grid md:grid-cols-2 gap-11 ">
     
        {/* <div className="flex flex-row items-center justify-center gap-2 text-center mt-5 ml-1">
            
           <img className="" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="50px"/>
          <span className="font-bold text-3xl tracking-tighter">
            <span>Order takeaway even faster! </span>
          </span></div> */}
          {/*  */}
          <div className="flex flex-col items-center -mt-6">
      {/* <span className="text-4xl mb-2"><img className="" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="80px"/></span> */}
      <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
      <p className=" font-bold text-3xl text-center text-grey-400"><span className="text-gray-500">I'm </span><span className="text-sky-500">Nikhil Chaubey</span><span className="text-gray-500">. Full Stack Developer, passionate about building scalable web solutions. Always learning.</span></p>
      <div className="flex gup gap-3 mt-1">
      <SocialIcon url="https://github.com/NikhilChaubey18" className="pag" bgColor="#333" fgColor="#fff" />
      <SocialIcon url="https://www.linkedin.com/in/nikhil-chaubey-4b5859227/" bgColor="#0077B5" fgColor="#fff" />
      <SocialIcon url="mailto:nikhilch1804@gmail.com" bgColor="#7f7f7f" fgColor="#fff" />
      {/* Add more social icons as needed */}
    </div>
     <Link to= "https://drive.google.com/file/d/1DdbqI4WFmr2afFmK5gGRAU6ey-172hgA/view?usp=sharing" className=" button1 flex flex-col mt-3 ">
         See my Resume
     </Link>
    </div>

          {/*  */}
          <div>
        <div className="flex flex-col  ">
  <img src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif" width="800" height="300"/>
</div>
</div>
   {/* <div className="flex flex-col gap-11">
       
          <span>
            Download the EatFood App for faster ordering and personalised
            recommendations
          </span>
        
        </div> */}
     
    
    </div>
    
    
    </div>

  
    </>

   
  );
};

export default HomePage;