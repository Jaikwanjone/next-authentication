"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const RegesterPage = () => {
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comFirmPassword, setComFirmPassword] = useState("");
  const [error, setError] = useState("");

  const isValid = !name || !email || !password || !comFirmPassword;
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (password !== comFirmPassword) {
      setError("Password do not match");
      return;
    }
    if (!name || !email || !password || !comFirmPassword) {
      setError("Please complete all inputs");
      return;
    }
    try {
      const resUser = await fetch("http://localhost:3000/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUser.json();
      if (user) {
        setError("User already exist");
        return;
      }
      const res = await fetch("http://localhost:3000/api/regester", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      setLoading(true);
      if (res.ok) {
        const form = evt.target;
        setError("");
        form.reset();
        setSuccess("User regestered successfully.");
      } else {
        console.log("User regesteration failed");
      }
      setLoading(false);
    } catch (error) {
      console.log("Error during regesteration", error);
    }
  };

  useEffect(() => {
    setTimeout(() => setError(""), 5000);
  }, [error]);
  useEffect(() => {
    setTimeout(() => setSuccess(""), 5000);
  }, [success]);

  // mongodb+srv://Admin:<password>@cluster0.nb5dqos.mongodb.net/
  return (
    <Container>
      <NavBar />
      <div className="flex-grow">
        <div className="flex justify-center items-center">
          <div className="w-[400px] p-10 shadow-xl mt-5 rounded-xl">
            <h3 className="text-3xl font-medium text-center">Regester</h3>
            <hr className="my-3" />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(evt) => setName(evt.target.value)}
                className="w-full  bg-gray-300 border py-2 px-3 rounded text-lg my-2 outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                onChange={(evt) => setEmail(evt.target.value)}
                className="w-full bg-gray-300 border py-2 px-3 rounded text-lg my-2 outline-none"
                placeholder="Email"
              />
              <input
                type="password"
                onChange={(evt) => setPassword(evt.target.value)}
                className="w-full bg-gray-300 border py-2 px-3 rounded text-lg my-2 outline-none"
                placeholder=" Password"
              />
              <input
                type="password"
                onChange={(evt) => setComFirmPassword(evt.target.value)}
                className="w-full bg-gray-300 border py-2 px-3 rounded text-lg my-2 outline-none"
                placeholder="Comfirm your Password"
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
                {loading ? "Loading ..." : "Sign Up"}
              </button>
              <hr className="my-3" />
              <p className="font-medium">
                Already have an accoundt? Go to
                <Link href="/login" className=" text-blue-500 hover:underline">
                  Login
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
          {success} !
        </div>
      )}
    </Container>
  );
};
export default RegesterPage;
