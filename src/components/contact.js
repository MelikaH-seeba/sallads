import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Arrow from "../images/arrow.svg"

export default class ContactSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
          opening_hours: [],
          active:false,
          phone:"",
          email:"",
          address:"",
          day:0,
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
            const special_opening_hours = res.data.data.custom_working_time;
            this.setState({loading:false, opening_hours:opening_hours, phone:phone, email:email, address:address, special_opening_hours:special_opening_hours},function() {
                //console.log(this.state.opening_hours.monday[0].start)
            })
          }); 

     const date = new Date();
     const day = date.getDay();
     this.setState({day:day});
    }
  render() {
    return (
        <section id="contact__section" className="section">
            <div className="container">
                <div className="columns">
                                 <div className="column is-5 hours">
                        
                        <div className="columns">
                            <div className="column is-6">
                            <h1>ÖPPETTIDER</h1>
                            <div className={`dropdown ${this.state.active && "is-active"}`}>
                
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={ () => this.setState({active:!this.state.active})}>
                                    {this.state.loading ===true
                                    ? <p>Loading</p>
                                    :<>
                                    {this.state.day === 1
                                        ? <>{this.state.opening_hours.monday[0].start === null
                                            ? <span>Måndag Stängt</span>
                                            : <span>Måndag {this.state.opening_hours.monday[0].start} - {this.state.opening_hours.monday[0].end}</span>
                                        }
                                        </>
                                        : <> {this.state.day === 2
                                            ? <>{this.state.opening_hours.tuesday[0].start === null
                                                ?  <span>Tisdag Stängt</span>
                                                : <span>Tisdag {this.state.opening_hours.tuesday[0].start} - {this.state.opening_hours.tuesday[0].end}</span>
                                                }
                                            </> 
                                            : <>
                                            {this.state.day === 3
                                            ? <>{this.state.opening_hours.wednesday[0].start === null
                                                ?  <span>Onsdag Stängt</span>
                                                :  <span>Onsdag {this.state.opening_hours.wednesday[0].start} - {this.state.opening_hours.wednesday[0].end}</span>
                                            }
                                            </>
                                            : <>
                                                {this.state.day === 4
                                                ? <>
                                                    {this.state.opening_hours.thursday[0].start === null
                                                    ?<span>Torsdag Stängt</span>
                                                    :<span>Torsdag {this.state.opening_hours.thursday[0].start} - {this.state.opening_hours.thursday[0].end}</span>
                                                    }
                                                </>
                                                : <>
                                                {this.state.day === 5
                                                ?<>
                                                {this.state.opening_hours.friday[0].start === null
                                                ?<span>Fredag Stängt</span>
                                                :<span>Fredag {this.state.opening_hours.friday[0].start} - {this.state.opening_hours.friday[0].end}</span>
                                                }
                                                </>
                                                : <>
                                                {this.state.day === 6
                                                ?<>{this.state.opening_hours.saturday[0].start === null
                                                ?<span>Sondag Stängt</span>
                                                :<span>Sondag {this.state.opening_hours.saturday[0].start} - {this.state.opening_hours.saturday[0].end}</span>
                                                } 
                                                </>
                                                :<>{this.state.opening_hours.sunday[0].start === null
                                                ?<span>Lordag Stängt</span>
                                                :<span>Lordag {this.state.opening_hours.sunday[0].start} - {this.state.opening_hours.sunday[0].end}</span>
                                                }                            
                                                </>
                                                }
                                                </>
                                                }
                                                </>
                                                }
                                            </>
                                            }
                                            </>
                                         }
                                         </>
                                    }
                                    </>
                                    }
                                    <span className="icon is-small">
                                        <img src={Arrow} alt="Arrow"/>
                                    </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                    {this.state.loading ===true
                            ? <p>Loading</p>
                                :<> {this.state.opening_hours.monday[0].start === null
                                    ? <div className="columns dropdown-items is-mobile">
                                        <div className="column is-6"><p className="dropdown-item">Måndag</p></div>
                                        <div className="column is-6"><p className="dropdown-item">Stängt</p></div>
                                    </div>
                                    : <div className="columns dropdown-items is-mobile">
                                            <div className="column is-4">
                                                <p className="dropdown-item">Måndag</p>
                                            </div>
                                            <div className="column is-8">
                                                <p className="dropdown-item">{this.state.opening_hours.monday[0].start} - {this.state.opening_hours.monday[0].end}</p>
                                            </div>
                                        </div>
                                }
                            </>}
                            {this.state.loading ===true
                            ? <p>Loading</p>
                                :<> {this.state.opening_hours.tuesday[0].start === null
                                    ?  <div className="columns dropdown-items is-mobile">
                                        <div className="column is-4">
                                            <p className="dropdown-item">Tisdag</p>
                                        </div>
                                        <div className="column is-8">
                                            <p className="dropdown-item">Stängt</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="columns dropdown-items is-mobile">
                                        <div className="column is-4">
                                            <p className="dropdown-item">Tisdag</p>
                                        </div>
                                        <div className="column is-8">
                                            <p className="dropdown-item">{this.state.opening_hours.tuesday[0].start} - {this.state.opening_hours.tuesday[0].end}</p>
                                        </div>
                                    </div>
                                }
                            </>}
                            {this.state.loading ===true
                            ? <p>Loading</p>
                                :<> {this.state.opening_hours.wednesday[0].start === null
                                    ?  <div className="columns dropdown-items is-mobile">
                                    <div className="column is-4">
                                        <p className="dropdown-item">Onsdag</p>
                                    </div>
                                    <div className="column is-8">
                                        <p className="dropdown-item">Stängt</p>
                                    </div>
                                </div>
                                :
                                <div className="columns dropdown-items is-mobile">
                                    <div className="column is-4">
                                        <p className="dropdown-item">Onsdag</p>
                                    </div>
                                    <div className="column is-8">
                                        <p className="dropdown-item">{this.state.opening_hours.wednesday[0].start} - {this.state.opening_hours.wednesday[0].end}</p>
                                    </div>
                                </div>
                                     }
                            </>}
                            {this.state.loading ===true
                            ? <p>Loading</p>
                                :<> {this.state.opening_hours.thursday[0].start === null
                                    ?  <div className="columns dropdown-items is-mobile">
                                        <div className="column is-4">
                                            <p className="dropdown-item">Torsdag</p>
                                        </div>
                                        <div className="column is-8">
                                            <p className="dropdown-item">Stängt</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="columns dropdown-items is-mobile">
                                        <div className="column is-4">
                                            <p className="dropdown-item">Torsdag</p>
                                        </div>
                                        <div className="column is-8">
                                            <p className="dropdown-item">{this.state.opening_hours.thursday[0].start} - {this.state.opening_hours.thursday[0].end}</p>
                                        </div>
                                    </div>
                                }
                            </>}
                            {this.state.loading ===true
                            ? <p>Loading</p>
                                :<> {this.state.opening_hours.friday[0].start === null
                                    ?  <div className="columns dropdown-items is-mobile">
                                        <div className="column is-4">
                                            <p className="dropdown-item">Fredag</p>
                                        </div>
                                        <div className="column is-8">
                                            <p className="dropdown-item">Stängt</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="columns dropdown-items is-mobile">
                                        <div className="column is-4">
                                            <p className="dropdown-item">Fredag</p>
                                        </div>
                                        <div className="column is-8">
                                            <p className="dropdown-item">{this.state.opening_hours.friday[0].start} - {this.state.opening_hours.friday[0].end}</p>
                                        </div>
                                    </div>
                                }
                            </>}
                            {this.state.loading ===true
                            ? <p>Loading</p>
                                :<> {this.state.opening_hours.saturday[0].start === null
                                    ?  <div className="columns dropdown-items is-mobile">
                                        <div className="column is-4">
                                            <p className="dropdown-item">Lördag</p>
                                        </div>
                                        <div className="column is-8">
                                            <p className="dropdown-item">Stängt</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="columns dropdown-items is-mobile">
                                        <div className="column is-4">
                                            <p className="dropdown-item">Lördag</p>
                                        </div>
                                        <div className="column is-8">
                                            <p className="dropdown-item">{this.state.opening_hours.saturday[0].start} - {this.state.opening_hours.saturday[0].end}</p>
                                        </div>
                                    </div>
                                }
                            </>}
                            {this.state.loading ===true
                            ? <p>Loading</p>
                                :<> {this.state.opening_hours.sunday[0].start === null
                                    ?  <div className="columns dropdown-items is-mobile">
                                        <div className="column is-4">
                                            <p className="dropdown-item">Söndag</p>
                                        </div>
                                        <div className="column is-8">
                                            <p className="dropdown-item">Stängt</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="columns dropdown-items is-mobile">
                                        <div className="column is-4">
                                            <p className="dropdown-item">Söndag</p>
                                        </div>
                                        <div className="column is-8">
                                            <p className="dropdown-item">{this.state.opening_hours.sunday[0].start} - {this.state.opening_hours.sunday[0].end}</p>
                                        </div>
                                    </div>
                                }
                            </>}
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <div className="column is-6 special_opening_hours">
                            <h1>AVVIKANDE ÖPPETTIDER</h1>

                            {this.state.special_opening_hours.map(special=>(
                                <>
                         {special.closed == 1
                         ? <p>{special.date} Stängt</p>
                         : <p>{special.date} {special.start} - {special.end}</p>
                         } 
                     </>
                ))}
                            </div>
                            </div>
                    </div>
                    <div className="column is-5 contact">
                        <div className="columns">
                            <div className="column is-12 has-text-left">
                                <h1>Kontakta oss</h1>
                            </div>
                        </div>
                        <div className="columns emailPhone">
                            <div className="column is-6 has-text-left">
                                <h2>Mail</h2>
                                <a className="email" href={`mailto:+${this.state.email}`}>{this.state.email}</a>
                            </div>
                            <div className="column is-6 has-text-left">
                                <h2>Telefon</h2>
                                <a href={`tel:+${this.state.phone}`}>{this.state.phone}</a>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3 location">
                        <div className="columns">
                            <div className="column is-12 has-text-left">
                                <h1>Adress</h1>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-12 has-text-left">
                            <a href="https://www.google.com/maps/place/Krankroksgatan+7,+721+38+V%C3%A4ster%C3%A5s,+Sweden/@59.6116891,16.4613169,17z/data=!3m1!4b1!4m5!3m4!1s0x465e63c0e64779a1:0x454490891899f9c8!8m2!3d59.6116891!4d16.4635056?hl=en" target="_blank">{this.state.address} </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

