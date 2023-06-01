import React, { useState } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const SignInFour = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      localStorage.clear();
      localStorage.setItem("user", "success");
      navigate("/news");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <section className="login_section">
      <div className="bg-slate-50 p-4 grid grid-cols-1 lg:grid-cols-2 shadow-md shadow-gray-500">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
                Anyone with a pension or retirement is an investor in the stock
                market.
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Sign in
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              Don&apos;t have an account?{" "}
              <Link
                to={"/signup"}
                className="font-medium text-rose-500 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
              >
                Create a free account
              </Link>
            </p>

            <form className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-gray-200"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900 dark:text-gray-200"
                    >
                      {" "}
                      Password{" "}
                    </label>

                    <Link className="font-medium text-rose-500 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                      {" "}
                      Forgot password?{" "}
                    </Link>
                  </div>
                  <div className="mt-2.5">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-rose-500 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                    onClick={handleSubmit}
                  >
                    Get started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="ml-2 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

SignInFour.displayName = "SignInFour";
