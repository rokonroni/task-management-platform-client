import { Helmet } from "react-helmet-async";
import { Link , useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then(() => {
        Swal.fire("Login Successful!", "Welcome to our website!", "success");
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error}`,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="relative lg:py-20 py-10 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-500 uppercase">
            Log in
          </h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Password<span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <Link to="/resetPassword"  className="text-xs text-blue-600 hover:underline">
              Forget Password?
            </Link>
            <div className="mt-6">
              <button className="btn btn-active w-full bg-gradient-to-r hover:bg-gradient-to-l from-sky-600 to-cyan-400 px-4 py-2 rounded-lg text-white">
                Login
              </button>
            </div>
          </form>

          <SocialLogin />

          <p className="mt-8 text-sm font-light text-center text-gray-700">
            
            Do not have an account? 
            <Link
              to="/register"
              className="font-medium ml-1 text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
