function Search() {
  return (
    <form className="border-2 border-red size-fit p-1 rounded-xl mx-auto m-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for stocks"
          className="placeholder:italic placeholder:font-bold placeholder:text-purple/45 ml-1 text-lg focus:outline-none w-sm"
        />
        <button
          type="submit"
          className="bg-orange text-purple font-bold p-2 rounded-lg active:bg-red"
        >
          FETCH
        </button>
      </div>
    </form>
  );
}

export default Search;
