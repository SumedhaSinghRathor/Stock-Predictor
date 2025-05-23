import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between p-10">
      <img src="/Mask group.svg" className="size-12" alt="" />
      <div className="design w-fit h-fit shrink-0 fixed top-0 right-0">
        <div className="flex justify-end">
          <div className="size-30 bg-orange">
            <div className="size-30 bg-red rounded-bl-full rounded-tr-full"></div>
          </div>
          <div className="size-30 bg-purple">
            <div className="size-30 bg-red rounded-br-full rounded-tl-full"></div>
          </div>
          <div className="size-30 bg-orange flex justify-center items-center">
            <div className="size-20 rounded-full bg-red">
              <div className=""></div>
            </div>
          </div>
          <div className="size-30 bg-purple"></div>
        </div>
        <div className="flex justify-end">
          <div className="size-30 bg-red"></div>
          <div className="size-30 bg-linear-to-r from-[#4c2f58] to-50% from-50% to-[#d33d4f] flex justify-center items-center">
            <div className="size-22 bg-linear-to-r from-[#F28C38] to-50% from-50% to-[#4c2f58] rounded-full"></div>
          </div>
          <div className="size-30 bg-orange">
            <div className="size-30 bg-red rounded-bl-full rounded-tr-full"></div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="size-30 bg-orange flex justify-end">
            <div className="size-9 bg-purple rounded-bl-full"></div>
          </div>
          <div className="size-30 bg-radial from-orange from-15% to-15% to-red flex items-end">
            <div className="size-9 bg-purple rounded-tr-full"></div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="size-30 bg-orange">
            <div className="size-30 bg-purple rounded-br-4xl rounded-tl-full">
              <div className="absolute size-6 right-3 bottom-3 bg-red rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[40%] flex flex-col gap-2 select-none">
        <h1 className="font-black text-4xl text-red">Stock Predictor</h1>
        <p className="text-purple text-sm font-medium">
          A full-stack web application that fetches historical stock data,
          stores it in a database, and uses an{" "}
          <b>LSTM (Long Short-Term Memory) </b>
          deep learning model to predict future stock prices. Built with Flask
          for the backend, React for the frontend, and TensorFlow/Keras for the
          prediction logic.
        </p>
        <Link to="/fetch" className="w-fit">
          <button className="font-bold text-purple bg-orange active:bg-red focus:outline-none py-2 px-6 rounded-lg w-fit cursor-pointer hover:outline-offset-2 hover:outline-2 hover:outline-red">
            Predict
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
