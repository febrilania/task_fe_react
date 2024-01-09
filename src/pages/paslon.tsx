import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Paslon: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-3/4 mx-auto my-8">
        <h1 className="text-3xl font-bold text-lime-700 text-center">
          LIST PASLON
        </h1>
        <table className="border-collapse border border-slate-500 w-full p-5 my-5">
          <tr>
            <th className="border border-slate-600 p-3 bg-gray-300">No Urut</th>
            <th className="border border-slate-600 bg-gray-300">Image</th>
            <th className="border border-slate-600 bg-gray-300">Nama</th>
            <th className="border border-slate-600 bg-gray-300">
              Visi dan Misi
            </th>
            <th className="border border-slate-600 bg-gray-300">Koalisi</th>
          </tr>
          <tr>
            <td className="border border-slate-600 bg-white p-3 text-center ">
              1
            </td>
            <td className="border border-slate-600 bg-white grid justify-items-center">
              <img className="w-28 h-28" src="src/assets/anis.jpeg" alt="" />
            </td>
            <td className="border border-slate-600 bg-white px-3">
              Anis Baswedan
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
          </tr>
          <tr>
            <td className="border border-slate-600 bg-white p-3 text-center">
              2
            </td>
            <td className="border border-slate-600 bg-white grid justify-items-center">
              <img className="w-28 h-28" src="src/assets/prabowo.jpg" alt="" />
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
          </tr>
          <tr>
            <td className="border border-slate-600 bg-white p-3 text-center">
              3
            </td>
            <td className="border border-slate-600 bg-white grid justify-items-center">
              <img className="w-28 h-28" src="src/assets/ganjar.jpeg" alt="" />
            </td>
            <td className="border border-slate-600 bg-white px-3">
              Ganjar Pranowo
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
          </tr>
        </table>
        <Link
          to="/addPaslon"
          className="font-bold text-white bg-lime-800 rounded-md py-3 px-5 hover:bg-lime-600"
        >
          Add Paslon
        </Link>
      </div>
    </>
  );
};
export default Paslon;
