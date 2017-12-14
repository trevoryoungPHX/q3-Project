import React, { Component } from 'react'

class ContactTab extends Component {
  render () {
    return (
      <div className = "contactTab">
          <div class = "glanceName">{this.props.contacts.first_name} {this.props.contacts.last_name}</div>
          <div class = "line2"></div>
      </div>
    )
  }
}

export default ContactTab
