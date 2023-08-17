import React from "react"
import Tabs from "./tabs"

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 h-20">
      <h1 className="text-white ml-2">Simple News</h1>
      <Tabs />
    </header>
  )
}

export default Header