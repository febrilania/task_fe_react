import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full bg-black py-10">
        <div className="flex w-3/4 mx-auto mb-10 gap-4">
          <div>
            <img className="w-20" src="src/assets/dumbways.png" alt="" />
          </div>
          <div className="text-white">
            <h1 className="text-xl font-bold">DUMBWAYS.ID</h1>
            <p>
              Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota <br />
              Tangerang Selatan, Banten 15413
            </p>
          </div>
        </div>
        <hr />
        <h1 className="text-center text-white mt-10">
          Komisi Pemilihan Umum DumbWays.ID | Febrilania 2023
        </h1>
      </div>
    </>
  );
};

export default Footer;
