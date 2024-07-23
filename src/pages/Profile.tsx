



  const Profile = () => {
 

 
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
          <div className="flex flex-col items-center  mt-1 ">
     
      <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
      <h3 className=" font-bold text-3xl text-center text-grey-400">Here's what I do</h3>
      
      <p className="text-lg text-center text-gray-600 font-sans">⚡ Building responsive website front end using ReactJSs<br></br>

          ⚡ Backend development using NodeJS, ExpressJS and Flask<br></br>
          ⚡  Developed and deployed full-stack solutions with the MERN stack</p>
      
    
     
    </div>

          
          <div>
        <div className="flex flex-col  ">
  <img src="https://media.giphy.com/media/PI3QGKFN6XZUCMMqJm/giphy.gif?cid=ecf05e47okkwbu6nx16pfec0etjpzm9w422nr75qah6erh4n&ep=v1_gifs_related&rid=giphy.gif&ct=g" width="800" height="300"/>
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

export default Profile;
