import { Link } from "react-router-dom";
import Design from "../components/Design";
import Logo from "../components/Logo";

function Hero() {
  return (
    <section className="w-screen h-screen flex flex-col justify-between relative p-10">
      <Logo />
      <div className="w-2/5 flex flex-col gap-2 select-none">
        <h1 className="font-black text-4xl text-red">Stock Predictor</h1>
        <p className="text-purple text-sm font-medium">
          A full-stack web application that fetches historical stock data,
          stores it in a database, and uses an{" "}
          <b>LSTM (Long Short-Term Memory) </b>
          deep learning model to predict future stock prices. Built with Flask
          for the backend, React for the frontend, and TensorFlow/Keras for the
          prediction logic.
        </p>
        <Link
          to="/search"
          className="font-bold text-purple bg-orange active:bg-red focus:outline-none py-2 px-6 rounded-lg w-fit cursor-pointer hover:outline-offset-2 hover:outline-2 hover:outline-red"
        >
          Predict
        </Link>
      </div>
      <Design />
    </section>
  );
}

export default Hero;
