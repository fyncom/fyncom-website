import React from "react"

const Header = () => {
  return (
    <header>
      <img src="path_to_logo.png" alt="FynCom Logo" />
      <ul className="nav-links">
        <li>
          <a href="https://www.fyncom.com/use-cases">Use Cases</a>
        </li>
        <li>
          <a href="https://www.fyncom.com/about">About</a>
        </li>
        <li>
          <a href="https://www.fyncom.com/pricing">Pricing</a>
        </li>
        <li>
          <a href="https://www.fyncom.com/blog">Blog</a>
        </li>
        <li>
          <a href="https://www.fyncom.com/help-center">Help</a>
        </li>
      </ul>
      <div>
        <a href="https://dashboard.fyncom.com/">
          <button>Business Login</button>
        </a>
        <a href="https://app.fyncom.com/">
          <button>User Login</button>
        </a>
      </div>
    </header>
  )
}

export default Header
