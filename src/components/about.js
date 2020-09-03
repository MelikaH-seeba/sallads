import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default class AboutSection extends React.Component {
    state = {
        description : [],
    }
    componentDidMount(){
        axios.get(`https://login.findie.se/api/profiles/259/`).then(res => {
            var description = res.data.data.description;
            description = description.split('<br />\r\n<br />\r\n')
            this.setState({ description: description }, function() {
                console.log(this.state.description)
            })
          });
    }
  render() {
    return (
        <section id="about__section" className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-4 is-offset-4">
                        <p className="title">OM OSS</p>
                        {this.state.description.map(text =>(
                             <p className="subtitle">{text}</p>
                         ))}
                         
                    </div>
                </div>
                {/** 
                <div className="columns">
                    <div className="column is-4 captionColumn">
                        <p className="caption">caption 01</p>
                        <p className="smallTitle">Our Start</p>
                        <p>Momofuku Ssäm Bar opened in New York City’s East Village in 2006. We serve a new &amp; inspiring dish menu.</p>
                    </div>
                    <div className="column is-4 captionColumn">
                        <p className="caption">caption 02</p>
                        <p className="smallTitle">Transformatin of recipes</p>
                        <p>Momofuku Ssäm Bar opened in New York City’s East Village in 2006. We serve a new &amp; inspiring dish menu.</p>
                    </div>                   
                    <div className="column is-4 captionColumn">
                        <p className="caption">caption 03</p>
                        <p className="smallTitle">Elf Stockholm today</p>
                        <p>Momofuku Ssäm Bar opened in New York City’s East Village in 2006. We serve a new &amp; inspiring dish menu.</p>
                    </div>
                </div>
                */}
                
            </div>
        </section>

    )
  }
}

