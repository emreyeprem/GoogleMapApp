import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import '../css/style.css'

const imgStyle = {
    height: 60,
    right: 150

}


export default class NavBar extends Component {
  
  render() {
    return (
      <div>
        <Navbar className="teal" brand="" left>
        <div className="titleContainer">
        <img className="imgMap" src="https://img.icons8.com/color/48/000000/google-maps.png"></img>
        <p className="searchPlace">Search Places</p>
        
        </div>
            {/* <img style={imgStyle} src="https://pngimage.net/wp-content/uploads/2018/06/map-logo-png-9.png"/> */}
           
        </Navbar>
      </div>
    );
  }
}
