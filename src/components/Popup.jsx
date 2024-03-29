import React from "react"
import Bottomtext from "./Bottomtext"
import SearchBar from "./SearchBar"

const Popup = () => {
  return (
    <div className="bg-gray-200 text-black p-2 flex flex-col gap-4 w-max mt-10 rounded-md">
      <SearchBar />
      <Bottomtext />
    </div>
  )
}

export default Popup
