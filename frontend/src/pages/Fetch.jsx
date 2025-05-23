import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function Fetch() {
  return (
    <div>
      <div className="bg-purple text-white flex justify-end p-2">
        <Link to="/" className="flex gap-2">
          <img src="/chart-line.svg" alt="stock" className="aspect-[4/3]" />
          <div className="font-bold text-xl">Stock Predictor</div>
        </Link>
      </div>
      <div className="text-center py-8">
        <h1 className="text-red text-4xl font-bold leading-relaxed">
          Forecast. Invest. Repeat.
        </h1>
        <h2 className="text-orange text-2xl font-semibold leading-relaxed">
          ML-driven stock predictions using live data and machine learning
          models.
        </h2>
      </div>
      <Search />
    </div>
  );
}

export default Fetch;
