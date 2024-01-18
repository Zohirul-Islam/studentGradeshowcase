import React from "react";
import Searchform from "./Searchform";
import StudentTable1 from "./StudentTable1";
import StudentTable2 from "./StudentTable2";

export default function TableSection() {
  return (
    <div className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>
          <Searchform />
          <StudentTable1/>
          <StudentTable2/>
        </div>
      </div>
    </div>
  );
}
