import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/index.scss"
import layoutStyles from "../components/layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
