import React, { useState, useEffect } from "react";
import axios from "axios";

function Search({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
  const BASE_URL = "https://finnhub.io/api/v1";

  useEffect(() => {
    const fetchSymbols = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/search`, {
          params: {
            q: query,
            token: API_KEY,
          },
        });
        setResults(response.data.result.slice(0, 5));
        setShowDropdown(true);
      } catch (error) {
        console.error("Error fetching search results: ", error);
      }
    };

    const timeoutId = setTimeout(fetchSymbols, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSelect = (symbol) => {
    setQuery(symbol.description);
    setResults([]);
    setShowDropdown(false);

    if (onSelect) onSelect(symbol.symbol);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border-2 border-red size-fit p-1 rounded-xl mx-auto m-4"
    >
      <div className="relative">
        {" "}
        <input
          type="text"
          placeholder="Search for stocks"
          className="placeholder:italic placeholder:font-bold placeholder:text-purple/45 text-lg focus:outline-none text-purple w-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange text-purple font-bold p-2 rounded-lg active:bg-red"
        >
          Search
        </button>{" "}
        {showDropdown && results.length > 0 && (
          <ul className="absolute -z-10 w-full bg-white border-2 border-red rounded-b shadow mt-1 max-h-60 overflow-y-auto">
            {results.map((item) => (
              <li
                key={item.symbol}
                onClick={() => handleSelect(item)}
                className="p-2 cursor-pointer hover:bg-red/10"
              >
                <b>{item.symbol}</b> - {item.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}

export default Search;
