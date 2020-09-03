import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import OneImage from "../images/oneImage.png"
import EventImage from "../images/event-image.jpeg"
import ShareIcon from "../images/share.svg"
import Calendar from "../images/calendar.svg"
export default class ImagesSection extends React.Component {
  render() {
    return (
        <section className="section" id="featured_title">
            <hr/>
            <figure>
                <img src={Calendar} alt="Calendar"/>
            </figure>
        </section>
    )
  }
}





