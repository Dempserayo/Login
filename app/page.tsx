"use client";
import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center  w-full h-screen flex flex-row justify-center items-center"
        style={{ backgroundImage: "url(/imagenes/background.svg)" }}
      >
        <div className="flex flex-row justify-center items-center md:bg-blue-500 md:bg-opacity-40 md:backdrop-blur-sm rounded-3xl md:shadow-2xl md:border-2 md:border-blue-500 border-opacity-40 w-[440px] h-[450px] ">
          <div className="w-full mx-8 mt-12">
            <div className="max-[900px]:-mt-40 max-[900px]:my-20">
              <span className="font-extrabold text-white max-[800px]:flex max-[800px]:justify-center">
                Your Logo
              </span>
              <h1 className="font-extrabold text-2xl text-white max-[800px]:flex max-[800px]:justify-center max-[800px]:text-4xl ">
                Login
              </h1>
            </div>

            <div className="max-[900px]:scale-110 scale-90">
              <div>
                <p className="text-xs text-white font-bold my-2">Email</p>
                <input
                  placeholder="Email"
                  type="text"
                  className="rounded-md w-full h-8 px-2"
                ></input>
              </div>
              <div>
                <p className="text-xs text-white font-bold my-2">Password</p>
                <input
                  placeholder="Password"
                  type="password"
                  className="rounded-md w-full h-8 px-2"
                ></input>
              </div>

              <button className="text-xs scale-75 text-white">
                Forgot Password?
              </button>
              <button className="w-full h-10 mt-4 bg-blue-900 border-2 border-blue-900 border-opacity-80 rounded-md text-white   transition ease-in-out delay-150 hover:-translate-y- hover:scale-110  duration-300">
                Sign In
              </button>
              <div className="flex justify-center ">
                <button className="h-10 mt-4  rounded-md text-sm  text-white">
                  or continue with
                </button>
              </div>

              <div className="flex flex-row justify-center w-full h-20 gap-4">
                <button className="w-full h-10 mt-4 bg-white border-2 rounded-md text-xl text-center flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y- hover:scale-110  duration-300">
                  <BsGoogle />
                </button>
                <button className="w-full h-10 mt-4 bg-white border-2 rounded-md text-xl text-center flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y- hover:scale-110  duration-300">
                  <FaGithub />
                </button>
                <button className="w-full h-10 mt-4 bg-white border-2 rounded-md text-2xl text-center flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y- hover:scale-110  duration-300">
                  <IoLogoFacebook />
                </button>
              </div>

              <div className="flex justify-center ">
                <button className="h-10 -mt-4 rounded-md text-xs scale-75 text-white font-bold ">
                  Dont have an account yet? Register for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
