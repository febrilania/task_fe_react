import { useState } from "react";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [regist, setRegist] = useState({
    fullname: "",
    address: "",
    sex: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleRegist = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setRegist({ ...regist, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        regist
      );
      console.log(response.data);
      console.log(regist);
      navigate("/");
    } catch (error) {
      console.error("data error", error);
    }
  };

  return (
    <>
      <div className="w-1/2 mx-auto">
        <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-center text-lg font-bold my-5">Register</h1>
          <label htmlFor="fullname">Full Name</label>
          <div>
            <input
              type="text"
              id="fullname"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={regist.fullname}
              onChange={handleRegist}
              name="fullname"
            />
          </div>
          <label htmlFor="address">Alamat</label>
          <div>
            <input
              type="text"
              id="address"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={regist.address}
              onChange={handleRegist}
              name="address"
            />
          </div>
          <label htmlFor="sex">Jenis Kelamin</label>
          <div>
            <input
              type="text"
              id="sex"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={regist.sex}
              onChange={handleRegist}
              name="sex"
            />
          </div>
          <label htmlFor="username">Username</label>
          <div>
            <input
              type="text"
              id="username"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={regist.username}
              onChange={handleRegist}
              name="username"
            />
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              id="password"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={regist.password}
              onChange={handleRegist}
              name="password"
            />
          </div>
          <button className="text-white w-full font-bold my-5 px-5 py-2 bg-lime-700 rounded hover:bg-lime-500">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
