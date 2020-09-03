import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from "../images/logo.png"
import ButtonArrow from "../images/arrow-right.svg"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

function orderClick(){
    //document.getElementById('orderDiv').classList.toggle('activeDiv');
	document.getElementById('orderDiv').style.opacity = 1;
    document.getElementById('orderDiv').style.transform ="translateX(0)";
    disableBodyScroll(document.body);
enableBodyScroll(document.getElementById('orderDiv'));
}
export default class OrderSection extends React.Component {
  render() {
    return (
        <section id="order__section" className="section">
	<div id="orderDiv">
        <iframe src="https://salladsboxen-ordering.netlify.app/">
        </iframe>
    </div>
   
        <div className="container">
            <div className="columns">
                <div className="column is-12 orderColumn">
                    <div className="columns">
                        <div className="column is-1 cherryColumn">
                            <figure>
                                <img src={Logo} alt="Cherry"/>
                            </figure>
                        </div>
                        <div className="column is-8">
                            <h1>Beställ takeaway</h1>
                            <h2>Klicka på knappen till höger för att beställa takeaway från oss.</h2>
                        </div>
                        <div className="column is-3 buttonColumn has-text-right">
                            <button className="button" onClick={orderClick}>
                            Beställ takeaway
                                <figure>
                                    <img src={ButtonArrow} alt="Button Arrow"/>
                                </figure>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
  }
}





