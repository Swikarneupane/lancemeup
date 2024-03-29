import React from "react"
import Image from "next/image"

const Bottomtext = () => {
  return (
    <div className="flex flex-row gap-2 px-5 py-2  justify-start items-center border-1 rounded-lg bg-gray-200 w-auto font-light text-sm">
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20">
        <path
          d="M9.146 6.854l.354.353.707-.707-.353-.354-.708.708zM7.5 4.5l.354-.354-.354-.353-.354.353.354.354zM5.146 6.146l-.353.354.707.707.354-.353-.708-.708zM14.5 7.5H14h.5zm-7 7V14v.5zm0-14V0v.5zm-7 7H0h.5zm9.354-1.354l-2-2-.708.708 2 2 .708-.708zm-2.708-2l-2 2 .708.708 2-2-.708-.708zM7 4.5V11h1V4.5H7zm7 3A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zm-1 0A7.5 7.5 0 007.5 15v-1A6.5 6.5 0 011 7.5H0z"
          fill="currentColor"></path>
      </svg>
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20">
        <path
          d="M5.854 8.146L5.5 7.793l-.707.707.353.354.708-.708zM7.5 10.5l-.354.354.354.353.354-.353L7.5 10.5zm2.354-1.646l.353-.354-.707-.707-.354.353.708.708zM.5 7.5H0h.5zm7-7V0v.5zm0 14V14v.5zm7-7H14h.5zM5.146 8.854l2 2 .708-.708-2-2-.708.708zm2.708 2l2-2-.708-.708-2 2 .708.708zM8 10.5V4H7v6.5h1zm-7-3A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zm1 0A7.5 7.5 0 007.5 0v1A6.5 6.5 0 0114 7.5h1z"
          fill="currentColor"></path>
      </svg>{" "}
      <p className="mr-3">to navigate</p>
      <Image src="/enter.png" alt="Enter Button" width={20} height={20} />
      <p className="mr-3">to select</p>{" "}
      <Image
        src="/esc-button-icon.svg"
        alt="ESC Button"
        width={20}
        height={20}
      />
      to close
    </div>
  )
}

export default Bottomtext
