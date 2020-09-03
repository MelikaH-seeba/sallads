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
        
        <section id="featured_events_section" className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <div className="card facebookEvent">
                            <div className="card-image">
                                <figure className="image is-2by1">
                                <img src={EventImage} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">New location opening + open bar whole week</p>
                                    <p className="caption">Event caption example</p>
                                    <p className="subtitle is-6">April 12th 14:00</p>
                                </div>
                                </div>
                                <div className="content">
                                    <div className="columns">
                                        <div className="column is-12">
                                            <p className="eventDescription"> Certe inquam pertinax non numquam eius modi tempora incidunt ut aut rerum necessitatibus saepe eveniet ut et quasi naturalem atque haec.</p>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12 buttonColumn">
                                        <button className="button">Facebook Event</button>
                                        <figure>
                                            <img src={ShareIcon} alt=""/>
                                            <p>Share</p>
                                        </figure>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column is-4">
                        <div className="card otherEvent">
                            <div className="card-image">
                                <figure className="image is-2by1">
                                <img src={EventImage} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">New location opening + open bar whole week</p>
                                    <p className="caption">Event caption example</p>
                                    <p className="subtitle is-6">April 12th 14:00</p>
                                </div>
                                </div>
                                <div className="content">
                                    <div className="columns">
                                        <div className="column is-12">
                                            <p className="eventDescription"> Certe inquam pertinax non numquam eius modi tempora incidunt ut aut rerum necessitatibus saepe eveniet ut et quasi naturalem atque haec.</p>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12 buttonColumn">
                                        <button className="button">Buy Tickets</button>
                                        <figure>
                                            <img src={ShareIcon} alt=""/>
                                            <p>Share</p>
                                        </figure>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="column is-4">
                        <div className="card facebookEvent">
                            <div className="card-image">
                                <figure className="image is-2by1">
                                <img src={EventImage} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">New location opening + open bar whole week</p>
                                    <p className="caption">Event caption example</p>
                                    <p className="subtitle is-6">April 12th 14:00</p>
                                </div>
                                </div>
                                <div className="content">
                                    <div className="columns">
                                        <div className="column is-12">
                                            <p className="eventDescription"> Certe inquam pertinax non numquam eius modi tempora incidunt ut aut rerum necessitatibus saepe eveniet ut et quasi naturalem atque haec.</p>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12 buttonColumn">
                                        <button className="button">Facebook Event</button>
                                        <figure>
                                            <img src={ShareIcon} alt=""/>
                                            <p>Share</p>
                                        </figure>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

    )
  }
}





