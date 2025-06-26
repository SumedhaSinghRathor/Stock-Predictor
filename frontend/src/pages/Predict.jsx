import { useEffect, useRef, useState } from "react";
import Fetch from "./Fetch";
import { useLocation, useParams } from "react-router-dom";
import Canvas from "../components/Canvas";

function Predict() {
  const { symbol } = useParams();
  const location = useLocation();

  return (
    <>
      <Fetch />
      <section className="p-5 flex flex-col gap-4">
        <h1 className="text-2xl text-center text-red w-fit mx-auto">
          <span className="font-bold">{symbol}</span> -{" "}
          {location.state?.description}{" "}
          <span className="bg-orange text-white py-1 px-2 text-base m-auto rounded-full">
            Predicted
          </span>
        </h1>
        <Canvas />
      </section>
    </>
  );
}

export default Predict;
