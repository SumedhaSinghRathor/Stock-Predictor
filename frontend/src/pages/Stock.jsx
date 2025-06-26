import { Link, useParams, useLocation } from "react-router-dom";
import Fetch from "./Fetch";
import Canvas from "../components/Canvas";

function Stock() {
  const { symbol } = useParams();
  const location = useLocation();

  return (
    <>
      <Fetch />
      <section className="p-5 flex flex-col gap-4">
        <h1 className="text-2xl text-center text-red">
          <span className="font-bold">{symbol}</span> -{" "}
          {location.state?.description}
        </h1>
        <Canvas />
        <Link
          to={`/search/${symbol}/predict`}
          state={{ description: location.state?.description || "Nothing" }}
          className="text-center w-fit mx-auto"
        >
          <button className="font-bold text-2xl bg-orange cursor-pointer px-4 py-2 text-purple active:bg-red rounded-lg">
            PREDICT
          </button>
        </Link>
      </section>
    </>
  );
}

export default Stock;
