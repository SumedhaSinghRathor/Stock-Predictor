import { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Fetch from "./Fetch";

function Stock() {
  const { symbol } = useParams();
  const location = useLocation();
  const [selectedDuration, setSelectedDuration] = useState("");
  const durations = ["1 W", "1 M", "1 Y", "5 Y", "All"];
  const handleChange = (e) => {
    setSelectedDuration(e.target.value);
  };
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "18px Arial";
    context.fillText(selectedDuration, 10, 40);
  }, [selectedDuration]);

  return (
    <>
      <Fetch />
      <section className="p-5 flex flex-col gap-4">
        <h1 className="text-2xl text-center text-red">
          <span className="font-bold">{symbol}</span> -{" "}
          {location.state?.description}
        </h1>
        <canvas
          className="w-full border-4 border-purple rounded-2xl"
          ref={ref}
        />
        <div className="w=full flex justify-around">
          {durations.map((duration) => (
            <label
              key={duration}
              className={`border-2 border-red rounded-full px-4 font-bold text-lg ${
                selectedDuration === duration
                  ? "bg-red text-white"
                  : "hover:outline-2 outline-offset-2 outline-red"
              }`}
            >
              <input
                type="radio"
                id={duration}
                name="duration"
                value={duration}
                className="hidden"
                onChange={handleChange}
              />
              {duration}
            </label>
          ))}
        </div>
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
