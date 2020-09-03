import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AboutImage1 from "../images/about.png"
import Burger from '@animated-burgers/burger-slip' 
import '@animated-burgers/burger-slip/dist/styles.css' 
function orderClick(){
  document.body.style.position= "fixed";
  document.getElementById('orderDiv').classList.toggle('activeDiv');
}
function handleClick(event){
  event.target.classList.toggle('open');
  document.getElementsByClassName('mobileMenuContainer')[0].classList.toggle('open');
}
function onClickMenuItem(event){
  document.getElementsByClassName('mobileMenuContainer')[0].classList.toggle('open');
  document.getElementsByClassName('burger-slip')[0].classList.toggle('open');
}
  export default class MobileSection extends React.Component {
    render() {
      return (
        <section className="section is-hidden-desktop" id="section_header_mobile">
          <Burger isOpen={ false }
          onClick={handleClick.bind(this)}
           />
           <div className="container mobileMenuContainer">
             <div className="columns">
               <div className="column is-12">
                 <a href="#top" onClick={onClickMenuItem.bind(this)}>Hem</a>
               </div>
               <div className="column is-12">
                 <a href="#about__section" onClick={onClickMenuItem.bind(this)}>Om oss</a>
               </div>
               <div className="column is-12">
                 <a href="#footer__section" onClick={onClickMenuItem.bind(this)}>Öppettider</a>
               </div>
               <div className="column is-12">
                 <a href="#contact__section" onClick={onClickMenuItem.bind(this)}>Kontakt</a>
               </div>
               <div className="column is-12">
                 <a href="#events__section" onClick={onClickMenuItem.bind(this)}>Event</a>
               </div>
               <div className="column is-12">
                 <a href="#menu__section" onClick={onClickMenuItem.bind(this)}>Meny</a>
               </div>
              <div className="column is-12">
                 <a onClick={orderClick}>Beställ takeaway</a>
               </div>
             </div>
           </div>
        </section>
        
      )
    }
  }
  
