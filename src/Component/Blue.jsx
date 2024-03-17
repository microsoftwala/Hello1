import React from "react";
import "./Blue.css";

function Blue() {
  return (
    <div className="bg-blue-800 h-full border w-full p-10">
    <div className="w-1/2 mt-20 mb-2" style={{ marginLeft:"25%" }}>
      <div className="h-20 bg-black ">
      </div>
    </div>
    <div className="flex items-center ml-28">
      <img src="../../public/img-2.png" className="h-20"></img>
      <p style={{color:"white"}} className="text-3xl ml-3">UNLOCKED FULL EPISODES</p>
    </div>
      <div className="ml-28">
      <img src="../../public/Image-1.png" className="h-20"/>
      </div>
    </div>
  );
}

export default Blue;
