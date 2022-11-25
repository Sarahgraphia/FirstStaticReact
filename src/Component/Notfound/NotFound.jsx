import React, { Component } from 'react'
import errorimg from '../../photos/errorBird.png'
export default class NotFound extends Component {
  render() {
    return (
      <>
      <div className='text-center py-3'>
        <img src={errorimg} className="" alt="" />
      </div>
      
      
      </>
    )
  }
}
