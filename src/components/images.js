import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AboutImage1 from "../images/about.png"


export default class ImagesSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          images:"",
          loading:true,
        }
      }
    componentDidMount(){
        axios.get('https://login.findie.se/api/profiles/259/galleries').then(res => {   
            const images = res.data.data;
            this.setState({images:images, loading:false},function() {
               // console.log(this.state.images[0].images[0].medium);        
            })
          }); 
    }
  render() {
    return (
        <section id="images__section" className="section">
<div className="columns is-mobile">
                    <div className="column is-4">
                        <figure>
                        {this.state.loading ===true
                        ? <p>Loading...</p>
                        :  <img src={this.state.images[1].images[0].fullhd} alt="About"/>
                        }
                        </figure>
                    </div>
                    <div className="column is-4">
                    <figure>
                    {this.state.loading ===true
                        ? <p>Loading...</p>
                        :  <img src={this.state.images[1].images[1].fullhd} alt="About"/>
                        }                      
                          </figure>
                    </div>
                    <div className="column is-4">
                    <figure>
                    {this.state.loading ===true
                        ? <p>Loading...</p>
                        :  <img src={this.state.images[1].images[2].fullhd} alt="About"/>
                        }
                        </figure>
                    </div>
                </div>
        </section>
        

    )
  }
}





