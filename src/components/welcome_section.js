import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Scroll from "../images/scroll-icon.svg"


export default class WelcomeSection extends React.Component {
  state = {
    description : "",
    name:"",
    images:"",
    loading:true,
}
componentDidMount(){
    axios.get(`https://login.findie.se/api/profiles/259/`).then(res => {
        const description = res.data.data.description;
        const name = res.data.data.name;
        this.setState({ description:description, name:name }, function() {})
      });
      axios.get('https://login.findie.se/api/profiles/259/galleries').then(res => {   
            const images = res.data.data;
            this.setState({images:images, loading:false},function() {
            })
          }); 

}
  render() {   
    return (
<>
{this.state.loading ===true
?<p>Loading</p>
:<section className="hero is-success is-fullheight" id="top" style={{backgroundImage:`url(${this.state.images[0].images[0].fullhd})`}}>
<div className="hero-body">
  <div className="container">
    {/** <h1 className="title">
      Welcome to 
    </h1>*/}
    <h1 className="title">
    Salladsboxen Västerås
    </h1>
    
    <h2 className="subtitle">
    Det är enkelt att vara grön!    
    </h2>
    <Link href="#menu__section" className="button exploreButton">VISA VÅR MENY</Link>
  </div>
  <div className="scrollDiv">
      <figure>
          <img src={Scroll} alt="Scroll"/>
      </figure>
  <p className="scrollText">Scrolla för att visa mer </p>

  </div>

</div>
</section>  
  }
</>

    )
  }
}

