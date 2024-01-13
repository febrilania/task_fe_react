// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Modal from "./modal";
// import axios, { AxiosResponse } from "axios";

// interface LoginResponse {
//   role: string; // Adjust this based on your actual API response
// }

// const Navbar: React.FC = () => {
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const openLoginModal = () => {
//     setLoginModalOpen(true);
//   };

//   const closeLoginModal = () => {
//     setLoginModalOpen(false);
//   };

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Make a POST request to the login endpoint
//       const response: AxiosResponse<LoginResponse> = await axios.post(
//         "http://localhost:5000/api/v1/user/login",
//         { username, password }
//       );

//       // Assuming the API returns a role field in the response
//       const userRole = response.data.role;

//       // Update isLoggedIn state based on the user's role
//       setIsLoggedIn(userRole === "user" || userRole === "admin");

//       // Close the modal after successful login
//       closeLoginModal();
//     } catch (error) {
//       // Handle login error
//       console.error("Login failed:", error);
//     }
//   };

//   const handleLogout = () => {
//     // Perform logout logic (e.g., clear tokens, reset state)
//     setIsLoggedIn(false);
//   };
//   return (
//     <>
//       <nav className="bg-black py-3">
//         <div className="w-3/4 m-auto flex flex-row text-white">
//           <div className="basis-1/2 justify-items-start flex items-center gap-3">
//             <Link
//               to="/"
//               className="justify-items-start flex items-center gap-3"
//             >
//               <img className="w-10" src="src/assets/dumbways.png" alt="" />
//               <h1>PEMILU PRESIDEN DUMBWAYS INDONESIA</h1>
//             </Link>
//           </div>
//           <div className="basis-1/2 grid justify-items-end ">
//             <ul className="flex gap-10 items-center">
//               <li>
//                 <Link to="/partai" className="text-slate-300 hover:text-white">
//                   Partai
//                 </Link>
//               </li>
//               <li>|</li>
//               <li>
//                 <Link to="/paslon" className="text-slate-300 hover:text-white">
//                   Paslon
//                 </Link>
//               </li>
//               <li>|</li>
//               <li>
//                 <Link to="/voting" className="text-slate-300 hover:text-white">
//                   Voting
//                 </Link>
//               </li>
//               <li>
//                 {isLoggedIn ? (
//                   // Show logout button if logged in
//                   <button
//                     onClick={handleLogout}
//                     className="bg-white px-7 py-1 text-black rounded flex items-center"
//                   >
//                     Logout
//                   </button>
//                 ) : (
//                   // Show login button if not logged in
//                   <button
//                     onClick={openLoginModal}
//                     className="bg-white px-7 py-1 text-black rounded flex items-center"
//                   >
//                     Login
//                   </button>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
//         <div>
//           <form className="" action="" onSubmit={handleLogin}>
//             <h1 className="text-center text-lg font-bold my-5">LOGIN</h1>
//             <label htmlFor="">Username</label>
//             <div>
//               <input
//                 type="text"
//                 className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <label htmlFor="">Password</label>
//             <div>
//               <input
//                 type="Password"
//                 className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button className="text-white w-full font-bold my-5 px-5 py-2 bg-lime-700 rounded hover:bg-lime-500">
//               Submit
//             </button>
//             <p className="text-center font-thin">
//               <i>
//                 belum memiliki akun?{" "}
//                 <Link
//                   to="/register"
//                   className="text-blue-700 hover:text-blue-500 underline decoration-solid"
//                 >
//                   Register
//                 </Link>
//               </i>
//             </p>
//           </form>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
import axios, { AxiosResponse } from "axios";

interface LoginResponse {
  role: string; // Sesuaikan ini berdasarkan respons API sesungguhnya
}

const Navbar: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("isLoggedIn") === "true" // Periksa status login dari localStorage
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Lakukan permintaan POST ke endpoint login
      const response: AxiosResponse<LoginResponse> = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        { username, password }
      );

      // Anggap respons API mengembalikan field role
      const userRole = response.data.role;

      // Update isLoggedIn state berdasarkan role user
      setIsLoggedIn(userRole === "user" || userRole === "admin");

      // Simpan status login ke localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Tutup modal setelah login berhasil
      closeLoginModal();
    } catch (error) {
      // Tangani kesalahan login
      console.error("Login gagal:", error);
    }
  };

  const handleLogout = () => {
    // Lakukan logika logout (misalnya, hapus token, reset state)
    setIsLoggedIn(false);

    // Hapus status login dari localStorage saat logout
    localStorage.removeItem("isLoggedIn");
  };

  // Efek samping untuk memeriksa status login setelah setiap render
  useEffect(() => {
    console.log("IsLoggedIn:", isLoggedIn);
  }, [isLoggedIn]);

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
                {isLoggedIn ? (
                  // Tampilkan tombol logout jika sudah login
                  <button
                    onClick={handleLogout}
                    className="bg-white px-7 py-1 text-black rounded flex items-center"
                  >
                    Logout
                  </button>
                ) : (
                  // Tampilkan tombol login jika belum login
                  <button
                    onClick={openLoginModal}
                    className="bg-white px-7 py-1 text-black rounded flex items-center"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <div>
          <form className="" action="" onSubmit={handleLogin}>
            <h1 className="text-center text-lg font-bold my-5">LOGIN</h1>
            <label htmlFor="">Username</label>
            <div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <label htmlFor="">Password</label>
            <div>
              <input
                type="Password"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setPassword(e.target.value)}
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
