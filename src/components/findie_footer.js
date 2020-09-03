import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FindieLogo from "../images/badge.svg"

export default class FindieFooter extends React.Component {
  render() {
    return (
        <section id="findie__footer" className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-11">
                        <p>© Salladsboxen 2020 • All rights reserved.</p>
                    </div>
                    <div className="column is-1 findieLogo">
                        <a href="https://findie.se/" target="_blank">
                        <figure>
                            <img src={FindieLogo} alt="Findie"/>
                        </figure>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
  }
}

