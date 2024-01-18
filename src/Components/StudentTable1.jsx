import React from "react";
import { student1 } from "../../data";
import StudentData from "./StudentData";

export default function StudentTable1() {
        const singleStudent = student1.map((value)=>{
            return <StudentData value={value}/>
        })

  return (
    <div className="w-3/5 my-12 mx-auto overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">Name</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              className: One
            </td>
          </tr>
            {
                singleStudent
            }

        </tbody>
      </table>
    </div>
  );
}
