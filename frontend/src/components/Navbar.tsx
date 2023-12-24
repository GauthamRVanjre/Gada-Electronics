import UserContext from "@/context/userContext";
import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  // logout function
  const handleLogOut = async () => {
    try {
      const response = await axios.get("http://localhost:5555/users/logout");
      if (response.status === 200) {
        logout();
        toast.success("User logged out");
      }
    } catch (error) {
      toast.error(`something went wrong ${error}`);
    }
  };

  return (
    <>
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex lg:items-center flex-wrap justify-between lg:flex-row flex-col">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            GADA ELECTRONICS
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-col pt-4 lg:pt-0 lg:flex-row lg:items-center lg:space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/cart" className="hover:text-gray-300">
              Cart
            </Link>
            {user && user.isAdmin && (
              <Link to="/admin" className="hover:text-gray-300">
                Admin
              </Link>
            )}
            {user && (
              <p
                onClick={handleLogOut}
                className="hover:text-gray-300 cursor-pointer"
              >
                Logout
              </p>
            )}
            {!user && (
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
