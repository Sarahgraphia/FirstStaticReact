import React, { Component } from "react";
import images from "../../Images/Images.jsx";
export default class Portfolio extends Component {
  state = {
    works: [
      {
        imgSrc: images.pic6,
        descrip: "Shogetten",
        price: 50,
        category: "Chocolate",
      },
      {
        imgSrc: images.pic5,
        descrip: "RitterSport",
        price: 40,
        category: "Chocolate",
      },
      {
        imgSrc: images.pic1,
        descrip: "Linditt",
        price: 80,
        category: "Chocolate",
      },
      {
        imgSrc: images.pic2,
        descrip: "Milka",
        price: 30,
        category: "Chocolate",
      },
      {
        imgSrc: images.pic3,
        descrip: "Cadebory",
        price: 35,
        category: "Chocolate",
      },
      {
        imgSrc: images.pic4,
        descrip: "Galaxy",
        price: 35,
        category: "Chocolate",
      },
    ],
  };

  render() {
    return (
      <div>
        <div className="min-vh-100 text-center container ">
          <h2 className="pt-5">Portfolio</h2>
          <div className="line-dark"></div>
          <i class="fa-solid fa-star fa-3x "></i>
          <div className="line-dark"></div>
          <div className="row  py-4">
            {this.state.works.map((work) => (
              <div className="col-md-4">
                <div className="item">
                  <div className="contain"> 
                  <img src={work.imgSrc} alt="" className="w-100 raduis-10 " />
                  <div className="layOut raduis-10 d-flex align-items-center justify-content-center">

                  <i class="fa-solid fa-plus text-white fa-8x fa-w-20"></i>
                  </div>
                </div>
                 </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
