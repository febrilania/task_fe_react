import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Partai: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-3/4 mx-auto my-8">
        <h1 className="text-3xl font-bold text-lime-700 text-center">
          LIST PARTAI
        </h1>
        <table className="border-collapse border border-slate-500 w-full p-5 my-5">
          <tr>
            <th className="border border-slate-600 p-3 bg-gray-300">No Urut</th>
            <th className="border border-slate-600 bg-gray-300">Logo</th>
            <th className="border border-slate-600 bg-gray-300">Ketua Umum</th>
            <th className="border border-slate-600 bg-gray-300">
              Visi dan Misi
            </th>
            <th className="border border-slate-600 bg-gray-300">Alamat</th>
          </tr>
          <tr>
            <td className="border border-slate-600 bg-white p-3 text-center ">
              1
            </td>
            <td className="border border-slate-600 bg-white grid justify-items-center">
              <img className="w-28 h-28" src="src/assets/nasdem.png" alt="" />
            </td>
            <td className="border border-slate-600 bg-white px-3">
              Surya Paloh
            </td>
            <td className="border border-slate-600 bg-white px-3">
              <ul>
                <li className="list-disc ml-7">
                  Memindahkan Indonesia Ke laut
                </li>
                <li className="list-disc ml-7">
                  Memindahkan Indonesia Ke laut
                </li>
                <li className="list-disc ml-7">
                  Memindahkan Indonesia Ke laut
                </li>
              </ul>
            </td>
            <td className="border border-slate-600 bg-white px-3">
              Kerajaan Clover
            </td>
          </tr>
          <tr>
            <td className="border border-slate-600 bg-white p-3 text-center">
              2
            </td>
            <td className="border border-slate-600 bg-white grid justify-items-center">
              <img className="w-28 h-28" src="src/assets/gerindra.png" alt="" />
            </td>
            <td className="border border-slate-600 bg-white px-3">
              Prabowo Subianto
            </td>
            <td className="border border-slate-600 bg-white px-3">
              <ul>
                <li className="list-disc ml-7">
                  Memindahkan Indonesia Ke laut
                </li>
                <li className="list-disc ml-7">
                  Memindahkan Indonesia Ke laut
                </li>
                <li className="list-disc ml-7">
                  Memindahkan Indonesia Ke laut
                </li>
              </ul>
            </td>
            <td className="border border-slate-600 bg-white px-3">
              Kerajaan Diamond
            </td>
          </tr>
          <tr>
            <td className="border border-slate-600 bg-white p-3 text-center">
              3
            </td>
            <td className="border border-slate-600 bg-white grid justify-items-center">
              <img className="w-28 h-28" src="src/assets/PDI.jpeg" alt="" />
            </td>
            <td className="border border-slate-600 bg-white px-3">Megawati</td>
            <td className="border border-slate-600 bg-white px-3">
              <ul>
                <li className="list-disc ml-7">
                  Memindahkan Indonesia Ke laut
                </li>
                <li className="list-disc ml-7">
                  Memindahkan Indonesia Ke laut
                </li>
                <li className="list-disc ml-7">
                  Memindahkan Indonesia Ke laut
                </li>
              </ul>
            </td>
            <td className="border border-slate-600 bg-white px-3">
              Kerajaan Heart
            </td>
          </tr>
        </table>
        <Link
          to="/addPartai"
          className="font-bold text-white bg-lime-800 rounded-md py-3 px-5 hover:bg-lime-600"
        >
          Add Partai
        </Link>
      </div>
    </>
  );
};
export default Partai;
