import Footer from "./Components/Footer";
import Herosection from "./Components/Herosection";

import Navbar from "./Components/Navbar";
import TableSection from "./Components/TableSection";


function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <Herosection />
      <TableSection/>
      <Footer/>
    </div>
  );
}

export default App;
