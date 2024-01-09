import Navbar from "../components/navbar";

const AddCard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-3/4 mx-auto my-5">
        <h1 className="text-2xl font-bold text-lime-700 text-center">
          ADD ARTICLE
        </h1>
        <form action="" className="w-full mt-10">
          <div className="grid grid-cols-3 gap-10">
            <div className="flex items-end h-96 border border-black rounded-md ">
              <input
                type="file"
                className="w-full block py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="col-span-2 pl-6">
              <label htmlFor="">Title</label>
              <div>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label htmlFor="">Author</label>
              <div>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label htmlFor="">Description</label>
              <div>
                <textarea className="block w-full h-28 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
              <button className=" my-5 w-3/4 text-center text-white hover:bg-lime-500 font-bold text-lg p-2 bg-lime-700 rounded-md">
                POST
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddCard;
