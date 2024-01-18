import React from 'react'

export default function StudentData({value}) {
  return (
    <tr className="border-b border-[#7ECEB529]">
    <td className="p-5 text-sm md:text-xl">{value.id}</td>
    <td className="p-5 text-sm md:text-xl">
      <div className="flex space-x-3 items-center">
        <img
          className="w-8 h-8"
          src="./assets/avatar.png"
          width="32"
          height="32"
          alt="John Smith"
        />
        <span className="whitespace-nowrap">{value.name}</span>
      </div>
    </td>
    <td className="p-5 text-sm md:text-xl text-center">{value.grade}</td>
    <td className="p-5 text-sm md:text-xl text-center">{value.percentage}</td>
  </tr>
  )
}
