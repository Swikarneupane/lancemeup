import Link from "next/link"
import React from "react"

const Main = () => {
  //   function changePopup() {
  //     <Link href="/popup" />
  //   }
  return (
    <div className="flex flex-row gap-7 px-5 py-2 justify-between items-center border-1 rounded-lg bg-gray-300 w-max mx-auto mt-10 cursor-pointer">
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18">
        <path
          d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z"
          stroke="currentColor"></path>
      </svg>
      <p className="font-extralight text-base">Search</p>
      <p className="border-2 rounded-lg border-[#c2bfbf] bg-[#f2f1f1] px-2 py-1">
        Ctrl K
      </p>
    </div>
  )
}

export default Main
