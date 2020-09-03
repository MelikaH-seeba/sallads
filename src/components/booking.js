import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import OneImage from "../images/oneImage.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class ImagesSection extends React.Component {
    state = {
        startDate: new Date(),
      }
      handleChange = date => {
        this.setState({
          startDate: date,
        }, function(){
        })
      }
  render() {
    return (
        <section className="section" id="booking__section">
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-12">
                        <h2>Book a table</h2>
                        <h3>Fill out the information below to book with us.</h3>
                    </div>
                    <div className="column is-12">
                        <div className="columns">
                            <div className="column is-6 is-offset-3">
                            <Tabs>
                                <TabList>
                                <Tab>Personal</Tab>
                                <Tab>Business</Tab>
                                </TabList>
                            
                                <TabPanel>
                                    <div className="columns">
                                        <div className="column is-6">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                        <div className="column is-6">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-6">
                                            <input type="text" placeholder="Phone"/>
                                        </div>
                                        <div className="column is-6">
                                            <input type="text" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-6">
                                        <DatePicker
                                            className="inputDate"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            minDate={new Date()}
                                        />
                                        </div>
                                        <div className="column is-6">
                                            <input type="text" placeholder="Time"/>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12">
                                            <input className="notes" type="text" placeholder="Other notes"/>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12">
                                            <button className="button bookButton">
                                                Book a table
                                            </button>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12">
                                            <p>This is a text with aditional information regarding the booking system</p>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div className="columns">
                                        <div className="column is-6">
                                            <input type="text" placeholder="Company Name"/>
                                        </div>
                                        <div className="column is-6">
                                            <input type="text" placeholder="Company Adress"/>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-6">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                        <div className="column is-6">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-6">
                                            <input type="text" placeholder="Phone"/>
                                        </div>
                                        <div className="column is-6">
                                            <input type="text" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-6">
                                            <input type="text" placeholder="Date"/>
                                        </div>
                                        <div className="column is-6">
                                            <input type="text" placeholder="Time"/>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-12">
                                            <input className="notes" type="text" placeholder="Other notes"/>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                            </div>
                        </div>
                        <hr/>

                    </div>
                    

                </div>
            </div>
        </section>

    )
  }
}





