import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "./../components/header"

const AboutUsPage = () => {
  return (
    <div>
      <Header />
      <h1>This is About us page</h1>
      <p>
        <Link to={"/contact"}>Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutUsPage
