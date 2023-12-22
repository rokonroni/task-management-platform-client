import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div >
      <div
        className="hero h-[80vh] rounded-b-lg lg:h-[70vh] "
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay rounded-b-lg bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg" data-aos="zoom-in">
            <h1 className="mb-5 md:text-5xl font-bold">Manage your daily task</h1>
            <p className="mb-5">
              Efficiently organize and track your tasks with our powerful task management app. Simplify your workflow, increase productivity, and achieve your goals seamlessly.
            </p>
            <Link to='/dashboard'> <button className="btn btn-primary">Let’s Explore</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
