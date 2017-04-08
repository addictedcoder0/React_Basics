var React = require('react');

var GreeterMessage =  React.createClass({
  render: function(){
    console.log("render : GreeterMessage");
    var name = this.props.name;
    var msg = this.props.message;
      return(
        <div>
          <h1>Hello {name}</h1>
          <h3>{msg +' !!!'}</h3>
        </div>
      );
  }
});

module.exports = GreeterMessage;
