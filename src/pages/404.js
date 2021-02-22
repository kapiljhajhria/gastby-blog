import { Link } from "gatsby"
import React from "react"
import Layout from "./../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Go to home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
