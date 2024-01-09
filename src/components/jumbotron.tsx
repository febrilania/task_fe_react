import React from "react";
const Jumbotron: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 py-10">
        <div className="m-auto w-3/4 pb-10 rounded-lg bg-gradient-to-r from-red-800 to-orange-950">
          <div className="flex w-4/5">
            <div className="text-white ">
              <img
                className="opacity-25 mb-16 w-96"
                src="src/assets/brandred.png"
              />
              <div className="px-6">
                <h1 className="text-5xl font-bold">SELAMAT DATANG</h1>
                <p className="text-2xl">
                  PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH
                  ARTI NAMA
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img className="w-72" src="src/assets/kotasuara.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
