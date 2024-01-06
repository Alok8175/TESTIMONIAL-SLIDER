import React from "react";
import Testimonials from "./component/Testimonials";
import reviews from "./data";
 
// NOT FULL RESPONSIVE

const App = () => {
  return (
    <div className=" w-[100vw] h-[100vh] bg-gray-300 m-0 overflow-hidden flex flex-col justify-center items-center">
        <div className=" text-center mt-12 ">
          <h1 className=" text-black text-2xl font-bold mt-10 ">
            Our Testimonials
          </h1>
          <div className="w-1/5 bg-violet-400 h-1 mx-auto mt-2 rounded-md "></div>
          <div>
            <Testimonials reviews={reviews}/>
          </div>
        </div>
    </div>
  );
};

export default App;
