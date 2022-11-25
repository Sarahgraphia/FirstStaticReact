import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="text-center text-white py-5 footerbg ">
        <div className="row">


          <div className="col-md-4">

            <div className="footerItem ">

              <h4>LOCATION</h4>

              <p className="">2215 John Daniel Drive
                   Clark, MO 65243</p>

            </div>
          </div>

               <div className="col-md-4">

            <div className="footerItem ">

              <h4>AROUND THE WEB</h4>

             <div className="social text-white py-2">

              <i class="fa-brands fa-facebook-f "></i>
              <i class="fa-brands fa-twitter p-2"></i>
              <i class="fa-brands fa-linkedin-in  p-2"></i>
              <i class="fa-solid fa-basketball p-2"></i>
             </div>

            </div>
          </div>

             <div className="col-md-4">

            <div className="footerItem ">

              <h4>ABOUT FREELANCER</h4>

              <p className="px-5">Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>

            </div>
          </div>
        </div>
        </div>
            <div className="text-center text-white py-4 footer ">
               

               <span>Copyright © Your Website 2021</span>

        </div>
      </>
    );
  }
}
