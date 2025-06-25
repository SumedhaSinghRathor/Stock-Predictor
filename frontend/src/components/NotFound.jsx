import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-red/40">
      <div className="flex flex-col gap-3 items-center text-center bg-white border-4 border-red p-10 rounded-2xl">
        <h1 className="text-9xl font-bold text-red">404</h1>
        <h3 className="text-4xl text-red">Page Not Found</h3>
        <Link
          to="/"
          className="w-fit border-2 border-red p-2 m-2 rounded bg-red text-white cursor-pointer"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
