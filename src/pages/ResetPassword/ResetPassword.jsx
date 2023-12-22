import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ResetPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  const handleResetPassword = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    resetPassword(emailValue)
      .then(() => {
        Swal.fire(
          "Check your mail inbox!",
          "We send a email for reset your password!",
          "success"
        );
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
        <title>Reset Password</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="flex justify-center w-full h-screen items-center border">
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-center">
              <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
              <p className="mb-4 text-sm text-gray-700">
                We get it, stuff happens. Just enter your email address below
                and we will send you a link to reset your password!
              </p>
            </div>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  ref={emailRef}
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Email Address..."
                />
              </div>
              <div className="mb-6 text-center">
                <button
                  className="btn btn-active w-full bg-gradient-to-r hover:bg-gradient-to-l from-sky-600 to-cyan-400 px-4 py-2 rounded-lg text-white"
                  type="submit"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link
                  to="/register"
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Create an Account!
                </Link>
              </div>
              <div className="text-center">
                <Link
                  to="/login"
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Already have an account? Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
