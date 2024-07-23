



const About = () => {



    return (<>
        <div className=" ">

            <div className="grid md:grid-cols-2 gap-10 ">
                <img className="project1" src="https://media.giphy.com/media/YFFGUPTPTRqIhwepA4/giphy.gif?cid=790b7611oxwgho5lo1aw4axdp5ibigf3fx205jctecz5sp5g&ep=v1_gifs_search&rid=giphy.gif&ct=g"></img>
                <div>
                    <div className="flex flex-col items-center mt-3">
                        <span className="text-4xl mb-2"><img className="" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjBmZGc1OWNpNnVwYXp1d212bWlkdzdjaGYwem1wa2l2NTdnZGk4ZCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/ixN1f5UlViepnCjHkn/giphy.gif" width="100px" /></span>
                        <span className="text-4xl  mb-2">Education</span>
                     
                        <p className="  text-lg text-center text-gray-600 font-sans">I actively participate in hackathons and other tech-related activities. Below are some of my major certifications.</p>
                    </div>
                </div>
                </div>
                {/* <div className="card text-center">
  <div className="card-header">
  Madan Mohan Malaviya University of Technology
  </div> */}
  {/* <div className="card-body">
    <h5 className="card-title">Bachelor of Technology</h5>
    <p className="card-text">  Electrical and electronics engineering & minor in computer science engineering</p>
    <Link to="http://www.mmmut.ac.in/" className="btn btn-dark">Visit Website</Link>
  </div>
  <div className="card-footer text-body-secondary">
  2022- 2026
  </div> */}
  <div className="flex items-center justify-center ">
  <div className="card text-bg-info text-center mb-3 mt-2 text-white shadow-2xl " >
  <div className="card-header fw-bold fs-4"> Madan Mohan Malaviya University of Technology</div><span className="text-end fw-medium">2022-2026</span>
  <div className="card-body fw-medium">
    <p className="card-text">Bachelor of Technology in  Electrical and electronics engineering & minor in computer science engineering</p>
  </div>
</div>
</div>
</div>


       




    </>


    );
};

export default About;