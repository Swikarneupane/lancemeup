"use client"

import React, { useEffect, useState, useRef } from "react"
import Main from "../components/Main"
import Popup from "../components/Popup"

let useClickOutside = (handler) => {
  let domNode = useRef()

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current?.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener("mousedown", maybeHandler)

    return () => {
      document.removeEventListener("mousedown", maybeHandler)
    }
  })
  return domNode
}
// import { useOutsideClick } from "@/customHooks/useOutsideClick"

export default function Home() {
  const [openPopup, setOpenPopup] = useState(false)

  function changePopup() {
    setOpenPopup(!openPopup)
    console.log(openPopup)
  }
  // const handleClickOutside = () => {
  //   setOpenPopup(false)
  // }
  // const ref = useOutsideClick(handleClickOutside)

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true)
  }, [])
  useEffect(() => {
    document.addEventListener("keydown", detectKeyUp, true)
  }, [])

  function detectKeyUp(e) {
    if (e.keyCode === 27) setOpenPopup(false)
  }

  function detectKeyDown(e) {
    if (e.ctrlKey && e.keyCode === 75) {
      setOpenPopup(true)
    }
  }

  let domNode = useClickOutside(() => {
    setOpenPopup(false)
  })

  return (
    <div className=" flex justify-center items-center bg-gray-600 h-[100vh]">
      {openPopup ? (
        <div className="w-max  mb-20" ref={domNode}>
          <Popup />
        </div>
      ) : (
        <div onClick={changePopup} className="w-max  mb-20">
          <Main />
        </div>
      )}
    </div>
  )
}
