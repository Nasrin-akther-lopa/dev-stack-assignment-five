import React from 'react';
import bannarImg from '../assets/banner-stack.png';

const Bannar = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      alt="Tailwind CSS hero component"
      src={bannarImg}
      className="max-w-sm rounded-lg "
    />
    <div>
      <h1 className="text-7xl font-bold">Build Your Ideal <br></br>
      <span 
      className="text-7xl font-bold 
      bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text
       text-transparent ">
        Development Stack
        </span>
</h1>
      <p className="py-6 font-semibold text-gray-500">
       Explore frontend, backend, database, and tooling options, <br />
compare them side by side, and put together the stack that fits your <br />
next project.
      </p>
      <div className='flex gap-5'>
        <button className="btn
       bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white
        px-5 py-2 rounded-lg">Explore Technologies</button>
      <button className="btn px-5 font-semibold">Learn More</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bannar;