import React from "react"
import { Link } from "gatsby"
const AboutUsPage = () => {
  return (
    <div>
      <h1>This is About us page</h1>
      <p>
        <Link to={"/contact"}>Contact Me</Link>
      </p>
    </div>
  )
}

export default AboutUsPage
