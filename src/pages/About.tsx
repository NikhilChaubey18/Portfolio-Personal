
import { Link } from "react-router-dom";


const About = () => {



    return (<>
        <div className=" ">

            <div className="grid md:grid-cols-2 gap-10 ">
                <img className="project1" src="https://media.giphy.com/media/YFFGUPTPTRqIhwepA4/giphy.gif?cid=790b7611oxwgho5lo1aw4axdp5ibigf3fx205jctecz5sp5g&ep=v1_gifs_search&rid=giphy.gif&ct=g"></img>
                <div>
                    <div className="flex flex-col items-center mt-3">
                        <span className="text-4xl mb-2"><img className="" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="80px" /></span>
                        <span className="text-4xl  mb-2">Education</span>
                     
                        <p className="  text-lg text-center text-gray-600">I actively participate in hackathons and other tech-related activities. Below are some of my major certifications.</p>
                    </div>
                </div>
                </div>
                <div className="card text-center">
  <div className="card-header">
  Madan Mohan Malaviya University of Technology
  </div>
  <div className="card-body">
    <h5 className="card-title">Bachelor of Technology</h5>
    <p className="card-text">  Electrical and electronics engineering & minor in computer science engineering</p>
    <Link to="http://www.mmmut.ac.in/" className="btn btn-dark">Visit Website</Link>
  </div>
  <div className="card-footer text-body-secondary">
  2022- 2026
  </div>
</div>


        </div>




    </>


    );
};

export default About;