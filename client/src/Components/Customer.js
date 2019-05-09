import React from 'react';
class Customer extends React.Component{
  render(){
    return (
      <div>
        <h2>{this.props.name}({this.props.id})</h2>
        <img src={this.props.image} alt="profile"/>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;