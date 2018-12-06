import React, { Component } from 'react';

class Boats extends Component {
  render() {
    return (
      <div>
        <img src={this.props.item.url}/>
          <p>
            {this.props.item.name}  - 
            ${this.props.item.price}
          </p>
      </div>
    );
  }
}
  // skip this line if using Create React Native App
export default Boats;
