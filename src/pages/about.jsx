import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/layout"

const AboutUsPage = () => {
  return (
    <div>
      <Layout>
        <h1>This is About us page</h1>
        <p>
          <Link to={"/contact"}>Contact Me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutUsPage
