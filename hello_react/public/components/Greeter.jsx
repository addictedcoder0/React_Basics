var React = require('react');
var GreeterForm = require('./GreeterForm');
var GreeterMessage =  require('./GreeterMessage');

var Greeter =  React.createClass({
  // in this state we are no longer using Default Props
    getDefaultProps : function(){
      return {
        name: 'React' ,
        message : 'Stay Hungry , Stay Foolish'
      };
    },
    // predefined react function
    getInitialState : function(){
      return {
        name : 'Rudra',
        message : 'Stay Hungry , Stay Foolish'
      };
    },
    handleNewName : function(name){
      this.setState({
        name:name
      });
    },
    handleNewMessage : function(message){
      this.setState({
        message:message
      });
    },

// Nesting Conponents : [GreeterMessage,GreeterForm]
    render : function(){
      var name = this.state.name;
      var message = this.state.message;
      console.log("render : Greeter");
      return (
      <div>
         <GreeterMessage name={name} message={message}/>
         <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    );
    }
});

module.exports = Greeter;
