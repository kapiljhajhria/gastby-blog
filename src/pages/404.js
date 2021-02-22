import { Link } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "./../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Go to home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
