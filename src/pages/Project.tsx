
import { Link } from "react-router-dom";



const Project = () => {



    return (<>
        <div className=" ">

            <div className="grid md:grid-cols-2 gap-11 ">
                <img className="project1" src="./public/proimage.gif"></img>
                <div>
                    <div className="flex flex-col items-center mt-3">
                        <span className="text-4xl mb-2"><img className="" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="80px" /></span>
                        <span className="text-4xl mb-2">Project</span>
                        <p className="  text-lg text-center text-gray-600">My projects makes use of vast variety of latest technology tools. My best experience is to create Food Website projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.</p>
                    </div>
                </div>
                {/* project1 */}
                <div className="card" >
                    <img src="./public/hotelapp.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Wanderlust</h5>
                        <p className="card-text">Developing a hotel app with EJS, Node.js, Express, and MongoDB for seamless booking, management, and personalized guest experiences.</p>
                        <Link to="https://wanderlustproject-1.onrender.com" className="btn btn-dark">Go & Check</Link>
                    </div>
                </div>
                {/* project2 */}
                <div className="card" >
                    <img src="./public/Food.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">EarFood.com</h5>
                        <p className="card-text">Fast and convenient food delivery app built with React, Node.js, Express, and MongoDB, offering seamless ordering and personalized recommendations</p>

                        <Link to="https://food-app-frontent.onrender.com" className="btn btn-dark">Go & Check</Link>
                    </div>
                </div>
                {/* project3 */}
                {/* <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}
                {/* project4 */}
                {/* <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}



            </div>
        </div>




    </>


    );
};

export default Project;