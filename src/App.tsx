// import React from "react";
// import Navbar from "./components/navbar";
// import Jumbotron from "./components/jumbotron";
// import Card from "./components/card";
// import About from "./components/about";
// import Footer from "./components/footer";
// import Chart from "./components/chart";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Voting from "./pages/voting";

// const App: React.FC = () => {
//   const chartData = [
//     { name: "Ubing Ganteng", value: 78 },
//     { name: "ibu marlina", value: 25 },
//     { name: "bapak jaelani", value: 45 },
//   ];

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/voting' element={<Voting  />} />
//         </Routes>
//       </BrowserRouter>
//       <Navbar />
//       <Jumbotron />
//       <Card />
//       <About />
//       <Footer />
//       <Chart data={chartData} />
//     </>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Voting from "./pages/voting";
import Detail from "./pages/detail";
import Dashboard from "./pages/dashboard";
import Paslon from "./pages/paslon";
import Partai from "./pages/partai";
import AddPartai from "./pages/addPartai";
import AddPaslon from "./pages/addPaslon";
import AddCard from "./pages/addCard";
import Register from "./pages/register";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/voting" element={<Voting />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/paslon" element={<Paslon />}></Route>
        <Route path="/partai" element={<Partai />}></Route>
        <Route path="/addPartai" element={<AddPartai />}></Route>
        <Route path="/addPaslon" element={<AddPaslon />}></Route>
        <Route path="/addCard" element={<AddCard />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
