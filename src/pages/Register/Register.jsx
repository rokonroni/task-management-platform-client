import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { signUp, updateUserProfile } = useAuth();
  const navigate = useNavigate();
   const location = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const onSubmit = (data) => {
    signUp(data.email, data.password).then(() => {
      reset();
      updateUserProfile(data.name, data.photoURL).then(() => {
        toast.success("User created Successfully")
        navigate(location?.state ? location.state : '/dashboard');
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="relative lg:py-20 py-10 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-500 uppercase">
            Register
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="name"
              >
                Name
                <span className="text-red-600">*</span>
              </label>
              <input
              id="name"
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Enter your full name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.name && (
                <span className="text-red-600 mt-2 ">*Name is required</span>
              )}
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="photoURL"
              >
                Photo URL
                <span className="text-red-600">*</span>
              </label>
              <input
              id="photoURL"
                type="text"
                name="photoURL"
                {...register("photoURL", { required: true })}
                placeholder="Enter your photo URL"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.photoURL && (
                <span className="text-red-600 mt-2 ">*Photo URL is required</span>
              )}
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Email
                <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter your email address"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.email && (
                <span className="text-red-600 mt-2 ">*Email is required</span>
              )}
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Password
                  <span className="text-red-600">*</span>
                </label>
              </div>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                })}
                placeholder="Enter your password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />

              {errors.password?.type === "required" && (
                <span className="text-red-600 mt-2 ">
                  *Password is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600 mt-2 ">
                  *Password must be 8 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600 mt-2 ">
                  *Password must be less then 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600 mt-2 ">
                  *Minimum eight characters, at least one letter, one number and
                  one special character
                </span>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="btn btn-active w-full bg-gradient-to-r hover:bg-gradient-to-l from-sky-600 to-cyan-400 px-4 py-2 rounded-lg text-white">
                Sign Up
              </button>
            </div>
          </form>
          <SocialLogin />

          <p className="mt-8 text-sm font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
