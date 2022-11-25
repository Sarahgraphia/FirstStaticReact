import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="min-vh-100 text-center ">
          <div className="title py-2  text-center">
            <h2 className="pt-5  text-center">CONTACT ME</h2>
            <div className="line-dark"></div>
            <i class="fa-solid fa-star fa-3x "></i>
            <div className="line-dark "></div>
          </div>

          <section id="contact" className="">
            <div className="container">
              <div className="row">
                <div className="col-md-9 m-auto text-center">
                  <div className="send-message ">
                    <div className="form">
                      <form action>
                        <div className="personal-data">
                          <div className="include">
                            <input
                              className="personal useName "
                              required
                              type="text"
                              name="fname"
                              id="userName"
                              placeholder=" Name"/>
                              <hr />
                          </div>

                          <div className="include">
                            <input
                              className="personal userEmail"
                              required
                              type="email"
                              name="fname"
                              id="userEmail"
                              placeholder=" Email"
                              
                            />
                            <hr />
                          </div>

                          <div className="include">
                            <input
                              className="personal"
                              required
                              type="password"
                              id="userPass"
                              name="fname"
                              placeholder=" password"
                            />
                            <hr />
                          </div>
                        </div>
                        <div className="include">
                          <input
                            className="personal"
                            required
                            type="password"
                            id="userPhone"
                            name="fname"
                            placeholder=" Phone"
                          />
                          <hr />
                        </div>
                      </form>
                    </div>
                    <div className="submit">
                      <button
                        className="btn btn-info submitBtn"
                        id="submitBtn"
                        href="#">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
