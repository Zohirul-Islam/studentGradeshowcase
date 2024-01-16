import React from "react";

export default function TableHeader({header}) {
  return (
    <tr className="bg-white/5">
      <td className="p-5 text-sm md:text-xl" colSpan="4">
        {header}
      </td>
    </tr>
  );
}
