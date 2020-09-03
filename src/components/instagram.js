import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Image1 from "../images/image1.jpg"
import Image2 from "../images/image2.jpg"
import userInstagram from "user-instagram"


export default class Instagram extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          dataInsta: [],
        }
      }
        componentDidMount(){
            let instaData = userInstagram("salladsboxenvasteras")
            instaData.then(userData => {
            this.setState({ dataInsta: userData }, () => {
                //console.log(this.state)
            })
            })
        }
      
  render() {
    let chars = this.state.dataInsta.posts

    return (
        <div className="columns is-mobile" id = "instagram__section">

{chars && chars.length > 0
                ? chars.slice(0, 12).map(item => {
                    return (
                      <div
                        key={item.id}
                        className="column is-4 biggerImage"
                      >
                          <figure className="image is-square">
                            <img src={item.imageUrl} alt={item.caption} />
                          </figure>
                        
                      </div>
                    )
                  })
                : "Loading..."}

                    
                </div>

    )
  }
}





