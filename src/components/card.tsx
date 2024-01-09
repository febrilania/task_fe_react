import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface DummyData {
  title: string;
  content: string;
}

const Card: React.FC = () => {
  const [data, setData] = useState<DummyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("dummyData.json");
        const jsonData: DummyData[] = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching dummy data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="bg-gray-300 py-20">
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-[url('src/assets/kartu.jpg')] flex items-end ">
              <div className="text-white p-5">
                <button className=" rounded-md px-6 py-1 bg-red-600 text-white">
                  Senin 23 Jan 2023
                </button>
                <h1 className="text-2xl font-bold">
                  {data.length > 0 && (
                    <div key={0}>
                      {" "}
                      <h2>{data[0].title}</h2>
                      <p>{data[0].content}</p>
                    </div>
                  )}
                </h1>
                <p className="text-xl">Super Admin</p>
              </div>
            </div>
            <div className="">
              <img className="w-full" src="src/assets/kartu.jpg" />
              <div className="p-5 bg-white">
                <button className=" rounded-md px-6 py-1 bg-red-600 text-white">
                  Senin 23 Jan 2023
                </button>
                <h1 className="text-2xl font-bold">
                  {data.length > 0 && (
                    <div key={1}>
                      {" "}
                      <h2>{data[1].title}</h2>
                      <p>{data[1].content}</p>
                    </div>
                  )}
                </h1>
                <p className="text-xl">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-5">
            <div className="">
              <img className="w-full" src="src/assets/kartu.jpg" />
              <div className="p-5 bg-white">
                <button className=" rounded-md px-6 py-1 bg-red-600 text-white">
                  Senin 23 Jan 2023
                </button>
                <h1 className="text-2xl font-bold">
                  {data.length > 0 && (
                    <div key={2}>
                      {" "}
                      <h2>{data[2].title}</h2>
                      <p>{data[2].content}</p>
                    </div>
                  )}
                </h1>
                <p className="text-xl">Super Admin</p>
              </div>
            </div>
            <div className="">
              <img className="w-full" src="src/assets/kartu.jpg" />
              <div className="p-5 bg-white">
                <button className=" rounded-md px-6 py-1 bg-red-600 text-white">
                  Senin 23 Jan 2023
                </button>
                <h1 className="text-2xl font-bold">
                  <Link to="/detail">KPU TETAPKAN 3 MENTOR TERBAIK</Link>
                </h1>
                <p className="text-xl">Super Admin</p>
              </div>
            </div>
            <div className="">
              <img className="w-full" src="src/assets/kartu.jpg" />
              <div className="p-5 bg-white">
                <button className=" rounded-md px-6 py-1 bg-red-600 text-white">
                  Senin 23 Jan 2023
                </button>
                <h1 className="text-2xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-xl">Super Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
