import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello,</h1>
      <h2>I am kapil from delhi,India</h2>
      <p>
        Need a developer? <Link to={"/contact-us"}>Contact Us</Link>
      </p>
    </div>
  )
}
export default IndexPage