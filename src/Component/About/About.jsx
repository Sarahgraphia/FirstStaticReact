import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="min-vh-100 home-bg text-white ">
          <div className="container-about m-auto">
            <div className="title py-3  text-center">
              <h2 className="pt-5  text-center">ABOUT</h2>
              <div className="line-dark bg-white"></div>
              <i class="fa-solid fa-star fa-3x "></i>
              <div className="line-dark bg-white"></div>
            </div>

            <div className="row ">
              <div className="col-md-6">
                <div className="aboutContent text-white  ">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
              <div className="col-md-6  ">
                <div className="aboutContent text-white ">
                  <p>
                    You can create your own custom avatar for the masthead,
                    change the icon in the dividers, and add your email address
                    to the contact form to make it fully functional!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
