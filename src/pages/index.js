import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WelcomeSection from "../components/welcome_section"
import ContactSection from "../components/contact"
import AboutSection from "../components/about"
import ImagesSection from "../components/images"
import MenuSection from "../components/menu"
import FindieFooter from "../components/findie_footer"
import Footer from "../components/footer"
import OrderSection from "../components/order_section"
import Instagram from "../components/instagram"
import SocialMedia from "../components/social_media"
import OneImageSection from "../components/one_image"
import Booking from "../components/booking"
import Events from "../components/events"
import FeaturedEvents from "../components/featured_events"
import FeaturedTitle from "../components/featured_title"
import MobileSection from "../components/mobile_header"
export default class IndexPage extends React.Component {
  render() {
    return (
  <Layout>
    <SEO title description lang="se"/>
    <MobileSection></MobileSection>
    <WelcomeSection></WelcomeSection>
    <ContactSection></ContactSection>
    <AboutSection></AboutSection>
    <ImagesSection></ImagesSection>
    <MenuSection></MenuSection>
    <OneImageSection></OneImageSection>
    <Events></Events>
    <SocialMedia></SocialMedia>
    <Instagram></Instagram>
    <OrderSection></OrderSection>
    <Footer></Footer>
    <FindieFooter></FindieFooter>
  </Layout>
    )
  }
}

