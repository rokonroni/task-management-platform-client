import { NavLink } from "react-router-dom";


const NavLinks = () => {
 
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-none"
              : isActive
              ? "text-blue-600 font-bold text-lg "
              : "font-bold  text-lg hover:bg-transparent hover:text-blue-600 focus:bg-white focus:text-blue-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-none"
              : isActive
              ? "text-blue-600 font-bold underline text-lg "
              : "font-bold  text-lg hover:bg-transparent hover:text-blue-600 focus:bg-white focus:text-blue-600"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-none"
              : isActive
              ? "text-blue-600 font-bold  text-lg "
              : "font-bold  text-lg hover:bg-transparent hover:text-blue-600 focus:bg-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "bg-none"
              : isActive
              ? "text-blue-600 font-bold  text-lg "
              : "font-bold  text-lg hover:bg-transparent hover:text-blue-600 focus:bg-white"
          }
        >
          Blog
        </NavLink>
      </li>
     
    </>
  );
};

export default NavLinks;
