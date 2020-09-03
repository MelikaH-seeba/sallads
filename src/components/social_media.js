import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Instagram from "../images/instagram.svg"


export default class ImagesSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          instagram:"",
        }
      }
    componentDidMount(){
        axios.get('https://login.findie.se/api/profiles/259/').then(res => {
            
            const instagram = res.data.data.instagram;
            
            this.setState({instagram:instagram},function() {
                //console.log(this.state.opening_hours.monday[0].start)
            })
          }); 
    }
  render() {
    return (
        <section id="social__media" className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-6 firstColumn">
                        <h2>Salladsboxen Västerås</h2>
                        <h3>Följ oss på sociala medier för senaste nytt.</h3>
                    </div>
                    <div className="column is-6">
                        <div className="columns">
                            <div className="column instagramText">
                            <h4>Följ oss på Instagram</h4>
                            <h5>@salladsboxenvasteras heter vi på Instagram, följ oss där!</h5>
                   
                            </div>
                            <div className="column instagramColumn">
                                <a href={this.state.instagram} target="_blank">
                                <figure>
                                    <img src={Instagram} alt="Instagram"/>
                                </figure>
                                </a>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>

    )
  }
}





