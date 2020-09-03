import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AboutImage1 from "../images/about.png"
import Logo from "../images/logo.svg"
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import SmallUp from "../images/small-up.svg"
import logo2 from "../images/logo.png"
import phoneIcon from "../images/phone.svg"
function createMarkup() {
    return {
       __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.2806765222329!2d16.461316916388395!3d59.61168908175855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e63c0e64779a1%3A0x454490891899f9c8!2sKrankroksgatan%207%2C%20721%2038%20V%C3%A4ster%C3%A5s%2C%20Sweden!5e0!3m2!1sen!2sba!4v1593075712962!5m2!1sen!2sba" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'    };
 };

export default class FooterSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
          opening_hours: [],
          active:false,
          phone:"",
          email:"",
          address:"",
          instagram:"",
          facebook:"",
          special_opening_hours:[],
        }
      }
    componentDidMount(){
        this.setState({loading:true})
        axios.get('https://login.findie.se/api/profiles/259/').then(res => {
            const opening_hours = res.data.data.working_time;
            const phone = res.data.data.phone;
            const email = res.data.data.email;
            const address = res.data.data.address;
            const instagram = res.data.data.instagram;
            const facebook = res.data.data.facebook;
            const special_opening_hours = res.data.data.custom_working_time;
            this.setState({loading:false, opening_hours:opening_hours, email:email, phone:phone, address:address, instagram:instagram, facebook:facebook, special_opening_hours:special_opening_hours},function() {
                //console.log(this.state.opening_hours.monday[0].start)
            })
          }); 
    }
  render() {
    return (
    <section id="footer__section" className="section">
        <div className="container">
            <div className="columns">
                <div className="column is-3">
                    <h5>Öppettider</h5>
                    {this.state.loading === true
                    ? <p>Loading</p>
                    : 
                    <div className="columns is-mobile hours">
                        <div className="column is-4 day">Måndag</div>
                        {this.state.opening_hours.monday[0].start === null
                        ? <div className="column is-8 time">Stängt</div>
                        : <div className="column is-8 time">{this.state.opening_hours.monday[0].start} - {this.state.opening_hours.monday[0].end}</div>
                        }
                    </div>
                    }

                    {this.state.loading === true
                    ? <p>Loading</p>
                    : 
                    <div className="columns is-mobile hours">
                        <div className="column is-4 day">Tisdag</div>
                        {this.state.opening_hours.tuesday[0].start === null
                        ? <div className="column is-8 time">Stängt</div>
                        : <div className="column is-8 time">{this.state.opening_hours.tuesday[0].start} - {this.state.opening_hours.tuesday[0].end}</div>
                        }
                    </div>
                    }

                    {this.state.loading === true
                    ? <p>Loading</p>
                    : 
                    <div className="columns is-mobile hours">
                        <div className="column is-4 day">Onsdag</div>
                        {this.state.opening_hours.wednesday[0].start === null
                        ? <div className="column is-8 time">Stängt</div>
                        : <div className="column is-8 time">{this.state.opening_hours.wednesday[0].start} - {this.state.opening_hours.wednesday[0].end}</div>
                        }
                    </div>
                    }
                    {this.state.loading === true
                    ? <p>Loading</p>
                    : 
                    <div className="columns is-mobile hours">
                        <div className="column is-4 day">Torsdag</div>
                        {this.state.opening_hours.thursday[0].start === null
                        ? <div className="column is-8 time">Stängt</div>
                        : <div className="column is-8 time">{this.state.opening_hours.thursday[0].start} - {this.state.opening_hours.thursday[0].end}</div>
                        }
                    </div>
                    }
                    {this.state.loading === true
                    ? <p>Loading</p>
                    : 
                    <div className="columns is-mobile hours">
                        <div className="column is-4 day">Fredag</div>
                        {this.state.opening_hours.friday[0].start === null
                        ? <div className="column is-8 time">Stängt</div>
                        : <div className="column is-8 time">{this.state.opening_hours.friday[0].start} - {this.state.opening_hours.friday[0].end}</div>
                        }
                    </div>
                    }
                    {this.state.loading === true
                    ? <p>Loading</p>
                    : 
                    <div className="columns is-mobile hours">
                        <div className="column is-4 day">Lördag</div>
                        {this.state.opening_hours.saturday[0].start === null
                        ? <div className="column is-8 time">Stängt</div>
                        : <div className="column is-8 time">{this.state.opening_hours.saturday[0].start} - {this.state.opening_hours.saturday[0].end}</div>
                        }
                    </div>
                    }

                   {this.state.loading === true
                    ? <p>Loading</p>
                    : 
                    <div className="columns is-mobile hours">
                        <div className="column is-4 day">Söndag</div>
                        {this.state.opening_hours.sunday[0].start === null
                        ? <div className="column is-8 time">Stängt</div>
                        : <div className="column is-8 time">{this.state.opening_hours.sunday[0].start} - {this.state.opening_hours.sunday[0].end}</div>
                        }
                    </div>
                    }
                    
                </div>
                <div className="column is-3">
                    <h5>Kontakt</h5>
                    <div className="columns">
                        <div className="column is-12 emailPhone">
                            <h2>Mail</h2>
                            <a href={`mailto:+${this.state.email}`}>{this.state.email}</a>
                            <h2 className="phoneHeader">Telefon</h2>
                            <figure>
                                <img src={phoneIcon} alt=""/>
                                <a href={`tel:+${this.state.phone}`}>{this.state.phone}</a>
                            </figure>
                             
                        </div>
                    </div>
                </div>
                <div className="column is-6 location">
                    <h5>Adress</h5>
                    <a href="https://www.google.com/maps/place/Krankroksgatan+7,+721+38+V%C3%A4ster%C3%A5s,+Sweden/@59.6116891,16.4613169,17z/data=!3m1!4b1!4m5!3m4!1s0x465e63c0e64779a1:0x454490891899f9c8!8m2!3d59.6116891!4d16.4635056?hl=en" target="_blank">{this.state.address} </a>
                    <div className="_map" dangerouslySetInnerHTML={createMarkup()} />
                </div>
            </div>
            {this.state.loading
            ? <p>Loading...</p>
            :
            
            <div className="columns is-multiline openingHoursColumns">
          <div className="column is-12">
              <h5>Avvikande öppettider</h5>
          </div>
                {this.state.special_opening_hours.map(special=>(
                     <div className="column is-4 special_opening_hours">
                         {special.closed == 1
                         ? <p>{special.date} Stängt</p>
                         : <p>{special.date} {special.start} - {special.end}</p>
                         } 
                     </div>
                ))}
            </div>
            }
            <hr/>
            <div className="columns">
                <div className="column is-1 logo">
                    <figure>
                        <img src={logo2} alt=""/>
                    </figure>
                </div>
                <div className="column is-4 social_media">
                Följ oss på sociala medier
                    <a href={this.state.facebook} target="_blank">
                    <figure>
                        <img src={Facebook} alt="Facebook"/>
                    </figure>
                    </a>
                    <a href={this.state.instagram} target="_blank"> 
                    <figure>
                        <img src={Instagram} alt="Instagram"/>
                    </figure>
                    </a>
                </div>
                <div className="column is-4 nav">
                    <Link href="#top">Hem</Link> • 
                    <Link href="#menu__section">Meny</Link> • 
                    <Link href="#about__section">Om oss</Link> • 
                    <Link href="#order__section">Beställ takeaway</Link> • 
                    <Link href="#contact__section">Kontakt</Link>
                </div>
                <div className="column top_button has-text-right">
                    <Link href="#top"className="button goToTopButton">
                        <img src={SmallUp} alt=""/>
                    </Link>
                </div>
            </div>
        </div> 
    </section>
    )
  }
}





