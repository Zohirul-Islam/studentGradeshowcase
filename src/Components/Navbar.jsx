import React from 'react'

export default function Navbar() {
  return (
    <nav className="py-6">
    <div className="container bg-gray-400 mx-auto flex items-center justify-between gap-x-6"
    >

        <a>
            <img
                className="h-[40px]"
                src="../src/assets/avatar.png"
                alt="Lws"
            />
        </a>
       
        <a className="px-5 py-2 text-white bg-[#172227] rounded-[44px]"
            >Get Admission</a>
    </div>
</nav>
  )
}
