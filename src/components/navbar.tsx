import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";

const Navbar: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };
  return (
    <>
      <nav className="bg-black py-3">
        <div className="w-3/4 m-auto flex flex-row text-white">
          <div className="basis-1/2 justify-items-start flex items-center gap-3">
            <Link
              to="/"
              className="justify-items-start flex items-center gap-3"
            >
              <img className="w-10" src="src/assets/dumbways.png" alt="" />
              <h1>PEMILU PRESIDEN DUMBWAYS INDONESIA</h1>
            </Link>
          </div>
          <div className="basis-1/2 grid justify-items-end ">
            <ul className="flex gap-10 items-center">
              <li>
                <Link to="/partai" className="text-slate-300 hover:text-white">
                  Partai
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/paslon" className="text-slate-300 hover:text-white">
                  Paslon
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/voting" className="text-slate-300 hover:text-white">
                  Voting
                </Link>
              </li>
              <li>
                <button
                  onClick={openLoginModal}
                  className="bg-white px-7 py-1 text-black rounded flex items-center"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <div>
          <form className="" action="">
            <h1 className="text-center text-lg font-bold my-5">LOGIN</h1>
            <label htmlFor="">Username</label>
            <div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label htmlFor="">Password</label>
            <div>
              <input
                type="Password"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <button className="text-white w-full font-bold my-5 px-5 py-2 bg-lime-700 rounded hover:bg-lime-500">
              Submit
            </button>
            <p className="text-center font-thin">
              <i>
                belum memiliki akun?{" "}
                <Link
                  to="/register"
                  className="text-blue-700 hover:text-blue-500 underline decoration-solid"
                >
                  Register
                </Link>
              </i>
            </p>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
