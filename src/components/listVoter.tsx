const ListVoter: React.FC = () => {
  return (
    <>
      <table className="border-collapse border border-slate-500 w-3/4 p-5">
        <tr>
          <th className="border border-slate-600 p-3">No</th>
          <th className="border border-slate-600 ">Nama</th>
          <th className="border border-slate-600">Alamat</th>
          <th className="border border-slate-600">Jenis Kelamin</th>
          <th className="border border-slate-600">Paslon</th>
        </tr>
        <tr>
          <td className="border border-slate-600 bg-white p-3 text-center">
            1
          </td>
          <td className="border border-slate-600 bg-white px-3">Abing</td>
          <td className="border border-slate-600 bg-white px-3">Pagojengan</td>
          <td className="border border-slate-600 bg-white px-3">Laki-laki</td>
          <td className="border border-slate-600 bg-white px-3">Ganjar</td>
        </tr>
        <tr>
          <td className="border border-slate-600 bg-white p-3 text-center">
            2
          </td>
          <td className="border border-slate-600 bg-white px-3">Abing</td>
          <td className="border border-slate-600 bg-white px-3">Pagojengan</td>
          <td className="border border-slate-600 bg-white px-3">Laki-laki</td>
          <td className="border border-slate-600 bg-white px-3">Ganjar</td>
        </tr>
        <tr>
          <td className="border border-slate-600 bg-white p-3 text-center">
            3
          </td>
          <td className="border border-slate-600 bg-white px-3">Abing</td>
          <td className="border border-slate-600 bg-white px-3">Pagojengan</td>
          <td className="border border-slate-600 bg-white px-3">Laki-laki</td>
          <td className="border border-slate-600 bg-white px-3">Ganjar</td>
        </tr>
      </table>
    </>
  );
};
export default ListVoter;
