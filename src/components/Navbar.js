import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-center shadow-lg w-screen navbar">
      <div className="flex flex-row justify-center items-center p-3 text-indigo-500  rounded-xl my-2">
        <Link to="/" className="text-3xl font-readexPro font-semibold ">
          Cryptopia
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
