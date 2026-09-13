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
      <h1 className="text-5xl font-bold">Build Your Ideal
Development Stack</h1>
      <p className="py-6">
       Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
      </p>
      <button className="btn btn-secondary">Explore Technologies</button>
      <button className="btn">Learn More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bannar;