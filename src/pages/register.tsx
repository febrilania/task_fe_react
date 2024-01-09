const Register: React.FC = () => {
  return (
    <>
      <div className="w-1/2 mx-auto">
        <form className="w-3/4 mx-auto" action="">
          <h1 className="text-center text-lg font-bold my-5">Register</h1>
          <label htmlFor="">Full Name</label>
          <div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label htmlFor="">Alamat</label>
          <div>
            <input
              type="Password"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label htmlFor="">Jenis Kelamin</label>
          <div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
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
              type="password"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
