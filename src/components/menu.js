import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MenuIcon from "../images/menu-icon.svg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Download from "../images/download.svg"

export default class MenuSection extends React.Component {
    state = {
        fullMenu : [],
        loading:true,
    }
    componentDidMount(){
        axios.get(`https://login.findie.se/api/profiles/259/menus/`).then(res => {
            const fullMenu = res.data.data;
            this.setState({ fullMenu: fullMenu, loading:false }, function() {
            })
          });

    }
  render() {
    return (
        <section id="menu__section" className="section">
            <div className="container">
                <div className="columns menuHeader">
                    <div className="column is-6 is-offset-3">
                    <figure>
                            <img src={MenuIcon} alt="Menu"/>
                        </figure>
                        <h1 className="title">MENY</h1>
                       {/* <p className="subtitle">Take a look at what we offer in our restaurants.</p>*/}
                       
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-6 is-offset-3">
                    {this.state.loading ===true
                        ? <p>Loading</p>
                        : <Tabs forceRenderTabPanel defaultIndex={0}>
                        <TabList>
                        {this.state.fullMenu.map(category=>(
                            <Tab>{category.name}</Tab>  
                        ))}
                         </TabList>
                         <hr/>
                         {this.state.fullMenu.map(category=>(
                             <TabPanel>
                             {category.categories.map(item=>(
                                 <div className="columns subcategory">
                             <div className="column">
                                 <div className="columns ovalDivs">
                                 <div className="column is-4 ovalDiv"></div>
                                 <div className="column is-4 ovalDiv"></div>
                                 <div className="column is-4 ovalDiv"></div>
                                 </div>
                                <h3>{item.name}</h3>
                                {item.items.map(dish=>(
                                <div className="columns is-multiline">
                                     <div className="column is-12 dish">
                                         <p className="dish_name">{dish.name} •&nbsp;</p>
                                        <p><span className="dish_price">{dish.price}</span></p>
                                     </div>
                                     <div className="column is-12 description">
                                        <p>{dish.description}</p>
                                     </div>
                                 </div>
                                ))}
                             </div>
                         </div>   
                             ))}
                             </TabPanel>
                         ))}
                        </Tabs> 
  }
                    </div>
                    {/** 
                <div className="column is-3">
                    <a className="button pdfButton" href="../components/images/phone.svg" download="Pdf menu">
                        Skriv ut meny
                        <figure>
                            <img src={Download} alt="Download"/>
                        </figure>
                    </a>
                </div>
                */}
                </div>
            </div>
        </section>

    )
  }
}





