import CardNo from "../components/cardNo";
import Footer from "../components/footer";
import ListVoter from "../components/listVoter";
import Navbar from "../components/navbar";

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-3/4 mx-auto my-10">
        <h1 className="text-2xl font-bold text-lime-700 text-center">
          DASHBOARD
        </h1>
        <CardNo />
      </div>
      <div className="w-full bg-gray-300 mt-10">
        <h1 className="text-2xl font-bold text-lime-700 text-center py-10">
          LIST VOTER
        </h1>
        <div className="w-3/4 mx-auto grid justify-items-center">
          <ListVoter />
        </div>
        <div className="w-3/4 mx-auto py-5">
          <div className="w-3/4 mx-auto">
            <h1 className="text-2xl font-bold text-black">
              TOTAL SUARA TERKUMPUL : 1000
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Dashboard;
