"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const LoginPage = () => {
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isValid = !email || !password;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!email || !password) {
      setError("Please complete all inputs");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        const form = evt.target;
        setError("");
        form.reset();
        setSuccess("Login successfully.");
        router.push("/welcome");
      } else {
        console.log("Login failed");
      }
      setLoading(false);
    } catch (error) {
      console.log("Error during Login", error);
    }
  };
  useEffect(() => {
    setTimeout(() => setError(""), 5000);
  }, [error]);
  useEffect(() => {
    setTimeout(() => setSuccess(""), 5000);
    console.log("Render");
  }, [success]);

  return (
    <Container>
      <NavBar />
      <div className="flex-grow">
        <div className="flex justify-center items-center">
          <div className="w-[400px] p-10 shadow-xl mt-5 rounded-xl">
            <h3 className="text-3xl font-medium text-center">Login</h3>
            <hr className="my-3" />
            <form onSubmit={handleSubmit} action="" className=" ">
              <input
                type="text"
                onChange={(evt) => setEmail(evt.target.value)}
                className="w-full bg-gray-300 border py-2 px-3 rounded text-lg my-2 outline-none"
                placeholder="Enter your Email"
              />
              <input
                type="password"
                onChange={(evt) => setPassword(evt.target.value)}
                className="w-full bg-gray-300 border py-2 px-3 rounded text-lg my-2 outline-none"
                placeholder="Enter your Password"
              />
              <button
                className={`w-full ${
                  isValid
                    ? "bg-[#EBEBE4] text-gray-400"
                    : " bg-green-500  text-white"
                } border py-2 px-3 rounded-md text-lg my-2 ${
                  isValid ? "cursor-not-allowed" : "cursor-pointer"
                } `}
                type="submit"
                disabled={isValid ? true : false}
              >
                Login
              </button>
              <hr className="my-3" />
              <p className="font-medium">
                Do not have an account? Go to
                <Link
                  href="/regester"
                  className=" text-blue-500 hover:underline"
                >
                  {" "}
                  Regester
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      {error && (
        <div className=" absolute bottom-[50px] right-5 py-3 px-2 text-white transition-all duration-700 bg-red-600 rounded-lg">
          {error} !
        </div>
      )}
      {success && (
        <div className=" absolute bottom-[50px] right-5 py-3 px-2 text-white transition-all duration-700 bg-green-600 rounded-lg">
          {success}
        </div>
      )}
    </Container>
  );
};
export default LoginPage;
