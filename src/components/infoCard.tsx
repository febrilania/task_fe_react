const InfoCard: React.FC = () => {
  return (
    <>
      <div className="w-1/2 h-96 flex shadow-sm shadow-white rounded-sm bg-white mx-auto p-10 gap-8">
        <div className="w-1/3 h-full border border-black rounded-lg my-auto">
          <img
            className="w-full h-full rounded-lg"
            src="src/assets/kartu.jpg"
            alt=""
          />
        </div>
        <div className="my-auto">
          <h5 className="text-lg font-semibold">No urut 1</h5>
          <h2 className="text-3xl font-bold">Anis Baswedan</h2>
          <h4>Visi Dan Misi :</h4>
          <ul>
            <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
            <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
            <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
          </ul>
          <h4>Koalisi</h4>
          <ul>
            <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
            <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
            <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
