import { useState } from "react";
import { Link } from "react-router-dom";
import { userAuthStore } from "../store/authUser";

export default function SignUpPage() {
  const { searchParams } = new URL(document.location);
  const emailValue = searchParams.get("email");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(emailValue || "");
  const [password, setPassword] = useState("");

  const { signup } = userAuthStore();

  function handleSignUp(event) {
    event.preventDefault();
    console.log(email, ",", username, ",", password);
    signup({ username, email, password });
  }

  return (
    <div className="hero-bg bg-cover w-full bg-no-repeat">
      <header className="max-w-6xl mx-auto flex items-center justify-between px-1">
        <Link to={"/"}>
          <img src="/logo_1b.png" alt="streamify-logo" className="w-40" />
        </Link>
      </header>

      <div className="flex justify-center items-center pb-4">
        <div className="w-full max-w-md py-4 px-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold my-2">
            SignUp
          </h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                id="email"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300 block"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Example"
                id="username"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="******"
                id="password"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 hover:cursor-pointer">
              Sign Up
            </button>
          </form>
          <div className="text-center text-gray-300">
            Already a member?{" "}
            <Link to={"/login"} className="text-red-500 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
