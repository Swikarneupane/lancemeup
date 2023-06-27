"use client"

import React, { useEffect, useState } from "react"
import Main from "../components/Main"
import Popup from "../components/Popup"
import { useOutsideClick } from "@/customHooks/useOutsideClick"

export default function Home() {
  const [openPopup, setOpenPopup] = useState(false)

  const handleClickOutside = () => {
    setOpenPopup(false)
  }
  const ref = useOutsideClick(handleClickOutside)

  let keys = {
    a: false,
    s: false,
  }

  function changePopup() {
    setOpenPopup(!openPopup)
  }

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
    if (e.keyCode === 17) {
      keys.a = true
    }
    if (e.keyCode === 75) {
      keys.s = true
    }
    if (keys.a && keys.s) {
      setOpenPopup(true)
      keys.a = false
      keys.s = false
    }
  }

  return (
    <div>
      {openPopup ? (
        <div ref={ref} className="w-max">
          <Popup />
        </div>
      ) : (
        <div onClick={changePopup} className="w-max">
          <Main />
        </div>
      )}
    </div>
  )
}
