"use client"

import React, { useEffect, useState } from "react"
import Singleitem from "./Singleitem"

const SearchBar = () => {
  const [filteredItems, setFilteredItems] = useState()
  const [selectedOption, setSelectedOption] = useState("all")
  const [selectedPrice, setSelectedPrice] = useState("all")
  const [items, setItems] = useState()
  const [openCategory, setOpenCategory] = useState(true)
  const [toggleSearch, setToggleSearch] = useState(false)
  const [searchItem, setSearchItem] = useState("")

  const fetchData = async () => {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    setItems(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleFilter = () => {
    let filter = items?.filter((item) => {
      if (selectedOption === "all" && selectedPrice === "all") {
        return item
      } else if (
        (selectedOption === item.category && item.price < selectedPrice) ||
        (selectedOption === "all" && item.price < selectedPrice) ||
        (selectedOption === item.category && selectedPrice === "all")
      ) {
        return true
      } else {
        return false
      }
    })
    setFilteredItems(filter)
  }
  window.addEventListener("load", () => {
    handleFilter()
  })
  useEffect(() => {
    handleFilter()
  }, [selectedOption, selectedPrice])

  const handleOption = (e) => {
    setSelectedOption(e.target.value)
  }
  const handlePriceOption = (e) => {
    setSelectedPrice(e.target.value)
  }
  console.log(filteredItems)

  const handleSearchItem = (e) => {
    handleSearch()
    setSearchItem(e.target.value)
  }
  const handleSearch = () => {
    let filter = items.filter((item) => {
      if (searchItem) {
        return item.title.toLowerCase().includes(searchItem.toLowerCase())
      }
    })
    setFilteredItems(filter)
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2 px-5 py-2 justify-center items-center border-1 border-blue-400 rounded-lg  w-auto bg-white  font-light">
        <label htmlFor="search">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            className="sticky">
            <path
              d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z"
              stroke="currentColor"></path>
          </svg>
        </label>
        <div className="flex flex-col">
          <input
            name="search"
            id="search"
            placeholder="Search"
            className={`rounded text-left ${
              toggleSearch ? "w-[60vw]" : "w-auto"
            } px-2 py-1 outline-none`}
            type="search"
            onClick={() => setToggleSearch(true)}
            onChange={handleSearchItem}
          />
        </div>
        <div className="flex flex-col">
          {!openCategory && (
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              onClick={() => setOpenCategory(true)}
              className="cursor-pointer">
              <path
                d="M13.5 7.5l-5.757 5.757a4.243 4.243 0 01-6-6l5.929-5.929a2.828 2.828 0 014 4l-5.758 5.758a1.414 1.414 0 01-2-2L9.5 3.5"
                stroke="currentColor"></path>
            </svg>
          )}

          {openCategory && (
            <div className="flex flex-row gap-4">
              <div className="border-2 rounded-lg p-3">
                <select className="outline-none" onChange={handleOption}>
                  <option value="all">Category</option>
                  <option value="men's clothing">Men&apos;s Clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                  <option value="women's clothing">
                    Women&apos;s Clothing
                  </option>
                </select>
              </div>
              <div className="border-2 rounded-lg p-3">
                <select className="outline-none" onChange={handlePriceOption}>
                  <option value="all">Price</option>
                  <option value="20">less than $20</option>
                  <option value="50">less than $50</option>
                  <option value="100">less than $100</option>
                  <option value="200">less than $200</option>
                  <option value="500">less than $500</option>
                  <option value="700">less than $700</option>
                  <option value="1000">less than $1000</option>
                  <option value="5000">less than $5000</option>
                </select>
              </div>
            </div>
          )}
        </div>
        <div>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="cursor-pointer">
            <path
              d="M4.5 12.5l-.39.312A.5.5 0 004.5 13v-.5zm-4-5l-.39-.312a.5.5 0 000 .624L.5 7.5zm4-5V2a.5.5 0 00-.39.188l.39.312zm9.5 1v8h1v-8h-1zm-.5 8.5h-9v1h9v-1zm-8.61.188l-4-5-.78.624 4 5 .78-.624zm-4-4.376l4-5-.78-.624-4 5 .78.624zM4.5 3h9V2h-9v1zm9.5 8.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zm1-8A1.5 1.5 0 0013.5 2v1a.5.5 0 01.5.5h1zM6.146 5.854l4 4 .708-.708-4-4-.708.708zm4-.708l-4 4 .708.708 4-4-.708-.708z"
              fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <div>
        {toggleSearch && (
          <div>
            <ul className="flex flex-col gap-2 overflow-y-scroll h-[40vh] mt-2 w-auto">
              {filteredItems?.map((item) => (
                <Singleitem
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  price={item.price}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar
