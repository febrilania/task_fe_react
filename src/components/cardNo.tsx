const CardNo: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <div>
          <div className="mx-auto my-5 w-16 h-16 bg-blue-400 border-8 border-blue-800 rounded-full p-5 flex items-center font-bold text-lg">
            1
          </div>
          <div className="mx-auto my-5 w-72 h-64 bg-blue-400 rounded-md shadow-md shadow-black">
            <div className="w-full p-3">
              <img
                className="rounded-md w-full h-36"
                src="src/assets/anis.jpeg"
                alt=""
              />
            </div>
            <div className="w-full px-3">
              <h1 className="font-bold text-2xl text-black">ANIS BASWEDAN</h1>
              <h1 className="font-small text-sm text-black">Akumulasi : 10%</h1>
              <h1 className="font-small text-sm text-black">
                Jumlah Vote : 100 Votes
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto my-5 w-16 h-16 bg-yellow-400 border-8 border-yellow-800 rounded-full p-5 flex items-center font-bold text-lg">
            2
          </div>
          <div className="mx-auto my-5 w-72 h-64 bg-yellow-400 rounded-md shadow-md shadow-black">
            <div className="w-full p-3">
              <img
                className="rounded-md w-full h-36"
                src="src/assets/prabowo.jpg"
                alt=""
              />
            </div>
            <div className="w-full px-3">
              <h1 className="font-bold text-2xl text-black">
                PRABOWO SUBIANTO
              </h1>
              <h1 className="font-small text-sm text-black">Akumulasi : 20%</h1>
              <h1 className="font-small text-sm text-black">
                Jumlah Vote : 200 Votes
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto my-5 w-16 h-16 bg-red-400 border-8 border-red-800 rounded-full p-5 flex items-center font-bold text-lg">
            3
          </div>
          <div className="mx-auto my-5 w-72 h-64 bg-red-400 rounded-md shadow-md shadow-black">
            <div className="w-full p-3">
              <img
                className="rounded-md w-full h-36"
                src="src/assets/ganjar.jpeg"
                alt=""
              />
            </div>
            <div className="w-full px-3">
              <h1 className="font-bold text-2xl text-black">GANJAR PRANOWO</h1>
              <h1 className="font-small text-sm text-black">Akumulasi : 70%</h1>
              <h1 className="font-small text-sm text-black">
                Jumlah Vote : 700 Votes
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardNo;
