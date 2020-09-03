import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.png"

//let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
//document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
//window.addEventListener('resize', () => {
  // We execute the same script as before
  //let vh = window.innerHeight * 0.01;
  //document.documentElement.style.setProperty('--vh', `${vh}px`);
//});
function orderClick(){
  document.getElementById('orderDiv').classList.toggle('activeDiv');
  document.body.style.position= "fixed";
  document.getElementById('orderDiv').style.pos = "scroll";

}
const Header = ({ siteTitle }) => (
    
  <header id="header__section" className="section is-hidden-touch">
        <div className="container" id="navbar">
            <div className="columns">
                <div className="column">
                    <nav className="left__nav">
                                <Link href="#top">Hem</Link>
                                <Link href="#about__section">Om oss</Link>
                                <Link href="#menu__section">Meny</Link>
                    </nav>
                </div>
                <div className="column has-text-centered is-narrow">
                   <figure className="image">
                        <img src={Logo} alt="Logo"/>
                    </figure>
                </div>
                <div className="column has-text-right">
                    <nav className="right__nav">
                    <Link href="#events__section">Event</Link>    
                                <Link href="#footer__section">Kontakt</Link>
                                <button className="button" onClick={orderClick}>Beställ takeaway</button>
                    </nav>
                </div>
            </div>
        </div>
    </header>

)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
