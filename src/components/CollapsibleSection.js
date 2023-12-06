import React, { useState } from "react"

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section>
      <h2 onClick={() => setIsOpen(!isOpen)}>{title}</h2>
      {isOpen && <div>{children}</div>}
    </section>
  )
}

export default CollapsibleSection
