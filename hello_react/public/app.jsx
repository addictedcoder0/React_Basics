var React = require('react');
var ReactDOM =  require('react-dom');



var GreetingMessage =  React.createClass({
  render : function(){
    var name = this.props.name
    var msg = this.props.message
      return(
        <div>
        <h1>Hello {name}</h1>
        <h3>{msg +' !!!'}</h3>
        </div>
      );
  }
});
// static component : to render the Form
var GreetingForm =  React.createClass({

  onFormSubmit : function (e){
    e.preventDefault();// this is to stop the default behavior of browsers of refreshing the page on form submit
    var nameFromBox = this.refs.name.value
    var messageFromBox = this.refs.message.value
    var lengthOfName = nameFromBox.length
    var lengthOfMessage = messageFromBox.length

    //text area need to be cleared in all conditions
    this.refs.name.value=''
    this.refs.message.value=''

    if(lengthOfName > 0 ){

      this.props.onNewName(nameFromBox);
    }
    if(lengthOfMessage >0){

      this.props.onNewMessage(messageFromBox);
    }
  },

  render : function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <label>Name</label><input type="text" ref="name" /><br></br>
        <label>Message</label><input type="text" ref="message" />
        <button>submit</button>
      </form>
    );
  }
});

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

// Nesting Conponents : [GreetingRenderer,GreetingForm]
    render :function(){
      var name = this.state.name;
      var message = this.state.message;
      return (
        <div>
          <GreetingMessage name={name} message={message}/>
          <GreetingForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage} />

      </div>
      )
    }
});


var author_name = 'Rudra'
// rendering with property
ReactDOM.render(
  <Greeter name={author_name} message="Message passed as an attribute "/>,document.getElementById('app')
);

//rendering without property
// ReactDOM.render(
//   <Greeting />,document.getElementById('app')
// );
