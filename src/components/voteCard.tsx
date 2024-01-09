const VoteCard: React.FC = () => {
  return (
    <>
      <div className="shadow-md shadow-black flex gap-5 w-full h-28 bg-red-400 items-center px-4 my-3">
        <div className="border-2 border-white w-16 bg-red-800 text-center flex items-center p-1">
          <h3 className="text-white">
            No. Paslon
            <br />
            <span className="text-xl font-extrabold">3</span>
          </h3>
        </div>
        <div className="text-xl font-bold">
          <h1 className="text-xl font-extrabold text-white">GANJAR PRANOWO</h1>
          <h1 className="text-xl font-extrabold text-white">70%</h1>
        </div>
      </div>
      <div className="shadow-md shadow-black flex gap-5 w-full h-28 bg-yellow-400 items-center px-4 my-3">
        <div className="border-2 border-white w-16 bg-yellow-800 text-center flex items-center p-1">
          <h3 className="text-white">
            No. Paslon <br />
            <span className="text-xl font-extrabold">2</span>
          </h3>
        </div>
        <div className="text-xl font-bold">
          <h1 className="text-xl font-extrabold text-white">
            PRABOWO SUBIANTO
          </h1>
          <h1 className="text-xl font-extrabold text-white">20%</h1>
        </div>
      </div>
      <div className="shadow-md shadow-black flex gap-5 w-full h-28 bg-blue-400 items-center px-4 my-3">
        <div className="border-2 border-white w-16 bg-blue-800 text-center flex items-center p-1">
          <h3 className="text-white">
            No. Paslon <br />
            <span className="text-xl font-extrabold">1</span>
          </h3>
        </div>
        <div className="text-xl font-bold">
          <h1 className="text-xl font-extrabold text-white">ANIS BASWEDAN</h1>
          <h1 className="text-xl font-extrabold text-white">10%</h1>
        </div>
      </div>
    </>
  );
};

export default VoteCard;
