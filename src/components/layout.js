/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet"

import Header from "./header"
import "../scss/main.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Helmet 
    script={[{ 
      type: 'text/javascript', 
      innerHTML: "let vh = window.innerHeight * 0.01; document.documentElement.style.setProperty('--vh', `${vh}px`);window.addEventListener('resize', () => {let vh = window.innerHeight * 0.01;document.documentElement.style.setProperty('--vh', `${vh}px`);});"
       }]} 
    />
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
