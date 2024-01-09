import { useState } from "react";
import Chart from "../components/chart";
import Footer from "../components/footer";
import InfoCard from "../components/infoCard";
import Modal from "../components/modal";
import Navbar from "../components/navbar";
import VoteCard from "../components/voteCard";

const Voting: React.FC = () => {
  const chartData = [
    { name: "GANJAR PRANOWO", value: 70 },
    { name: "PRABOWO SUBIANTO", value: 20 },
    { name: "ANIS BASWEDAN", value: 10 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center py-5 font-bold text-4xl text-lime-700">
        INFO PEMILU TERUPDATE
      </h1>
      <div className="flex w-3/4 mx-auto">
        <Chart data={chartData} />
        <div className="w-full my-auto">
          <VoteCard />
          <button
            onClick={openModal}
            className="bg-lime-700 px-9 py-3 my-7 text-white font-bold"
          >
            MASUKAN SUARAMU
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="grid grid-cols-3 gap-2">
              <button className="w-72 border border-blue-800 rounded-md p-2 hover:bg-blue-400 shadow-md shadow-blue-800">
                <img
                  className="w-full h-72 rounded-md mb-4 border border-blue-800 shadow-md shadow-blue-800"
                  src="src/assets/anis.jpeg"
                  alt=""
                />
                <h1 className="font-bold text-left text-xl">ANIS BASWEDAN</h1>
                <p className="font-medium text-left text-md">
                  Pasangan no urut 1
                </p>
                <ul>
                  <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
                  <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
                  <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
                </ul>
              </button>
              <button className="w-72 border border-yellow-800 rounded-md p-2 hover:bg-yellow-400 shadow-md shadow-yellow-800">
                <img
                  className="w-full h-72 rounded-md mb-4 border border-yellow-800 shadow-md shadow-yellow-800"
                  src="src/assets/prabowo.jpg"
                  alt=""
                />
                <h1 className="font-bold text-left text-xl">
                  Prabowo Subianto
                </h1>
                <p className="font-medium text-left text-md">
                  Pasangan no urut 2
                </p>
                <ul>
                  <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
                  <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
                  <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
                </ul>
              </button>
              <button className="w-72 border border-red-800 rounded-md p-2 hover:bg-red-400 shadow-md shadow-red-800">
                <img
                  className="w-full h-72 rounded-md mb-4 border border-red-800 shadow-md shadow-red-800"
                  src="src/assets/ganjar.jpeg"
                  alt=""
                />
                <h1 className="font-bold text-left text-xl">Ganjar Pranowo</h1>
                <p className="font-medium text-left text-md">
                  Pasangan no urut 3
                </p>
                <ul>
                  <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
                  <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
                  <li className="list-disc ml-7">Memindahkan Konoha ke laut</li>
                </ul>
              </button>
              <button onClick={closeModal} className="mt-4 bg-gray-300 p-2">
                Close Modal
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="w-full bg-gray-300 py-10">
        <h1 className="text-center font-bold text-4xl text-lime-700 my-5 py-5">
          INFO PASLON
        </h1>
        <InfoCard />
      </div>
      <div className="w-full p-20">
        <div className="text-red-500 text-center w-3/4 m-auto">
          <h1 className="text-3xl font-bold">
            PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
            <br />
            YANG PENTING TIDAK MELEGALKAN SLOT
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Voting;
