import React from "react"

const Singleitem = ({ id, title, category, price }) => {
  return (
    <li
      className="flex flex-row border-1 gap-2 border-slate-700 px-4 py-2 bg-gray-300 rounded items-center justify-start"
      key={id}>
      <p className="text-lg font-extrabold">{title}</p>
      <p className="text-sm font-light uppercase ml-auto">{category}</p>
      <p className="text-base font-semibold">$ {price}</p>
    </li>
  )
}

export default Singleitem
