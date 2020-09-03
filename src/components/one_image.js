import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import OneImage from "../images/oneImage.png"

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
            //console.log(this.state.images[0].images[0].fullhd);        
        })
      }); 
}
  render() {
    return (
        <div id="one__image__section">
            {this.state.loading ===true
                        ? <p>Loading...</p>
                        :  <img src={this.state.images[2].images[0].fullhd} alt="About"/>
                        }        </div>

    )
  }
}





