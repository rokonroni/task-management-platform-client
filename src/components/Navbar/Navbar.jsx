import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {

  return (
    <div >
      <div className="navbar lg:fixed overflow-hidden max-w-7xl  lg:bg-black/40 bg-gray-700 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              
              <NavLinks />
              
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-2xl">Task Management Plartform</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <NavLinks />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
