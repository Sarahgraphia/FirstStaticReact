import React, { Component } from "react";
import profile from "../../Images/profile.svg";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="min-vh-100 d-flex  align-items-center justify-content-center text-center home-bg ">
          <div>
            <img src={profile} alt="" className="w-50" />
            <h1 className="text-white">START REACT</h1>

          <div className="line"></div> 
          
          <i class="fa-solid fa-star fa-3x text-white"></i>
            <div className="line"></div>
            <h3 className="my-3">Graphic Artist - Web Designer - Illustrator</h3>

          </div>
        </div>
      </div>
    );
  }
}
