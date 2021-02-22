import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/layout"
import Head from "../components/head"

const AboutUsPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>This is About us page</h1>
        <p>
          <Link to={"/contact"}>Contact Me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutUsPage
