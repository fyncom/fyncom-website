import React from "react"

const Header = () => {
  return (
    <header>
      <img src="path_to_logo.png" alt="FynCom Logo" />
      <ul className="nav-links">
        <li>Use Cases</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Help</li>
      </ul>
      <div>
        <button>Business Login</button>
        <button>User Login</button>
      </div>
    </header>
  )
}

export default Header
