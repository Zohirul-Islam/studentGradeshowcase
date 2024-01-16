import React from "react";

export default function Tabledata({ v }) {
  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{v.id}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={v.src}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{v.name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{v.Score}</td>
      <td className="p-5 text-sm md:text-xl text-center">{v.Percentage}</td>
    </tr>
  );
}
