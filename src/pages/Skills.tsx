import { Link } from "react-router-dom"

export default function Skills() {
  return (
    <>
    <div className=" ">

    <div className="grid md:grid-cols-2 gap-10 ">
        <img className="project1" src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dHdqbjFkbjFnYmFrZDl6MTdvaTV5ZWYydXp1ZjlmazBjaW45dmRmdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IqRYjzq9wYpY9rAKPk/giphy.gif"></img>
        <div>
            <div className="flex flex-col items-center mt-3">
                <span className="text-4xl mb-2"><img className="" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjBmZGc1OWNpNnVwYXp1d212bWlkdzdjaGYwem1wa2l2NTdnZGk4ZCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/ixN1f5UlViepnCjHkn/giphy.gif" width="100px" /></span>
                <span className="text-4xl  mb-2">You can find my resume here</span>
              <Link to= "https://drive.google.com/file/d/1DdbqI4WFmr2afFmK5gGRAU6ey-172hgA/view?usp=sharing" className=" button1 flex flex-col mt-3 ">
                      Resume
                  </Link>
               
            </div>
        </div>
        </div>


</div>







</>

  )
}
