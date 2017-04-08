var React = require('react');

var GreeterForm =  React.createClass({

  onFormSubmit : function (e){
    e.preventDefault();// this is to stop the default behavior of browsers of refreshing the page on form submit
    var nameFromBox = this.refs.name.value;
    var messageFromBox = this.refs.message.value;
    var lengthOfName = nameFromBox.length;
    var lengthOfMessage = messageFromBox.length;

    //text area need to be cleared in all conditions
    this.refs.name.value='';
    this.refs.message.value='';

    if(lengthOfName > 0 ){

      this.props.onNewName(nameFromBox);
    }
    if(lengthOfMessage >0){

      this.props.onNewMessage(messageFromBox);
    }
  },

  render : function(){
    console.log("render : GreeterForm");
    return(
      <form onSubmit={this.onFormSubmit}>
        <label>Name</label><input type="text" ref="name" /><br></br>
        <label>Message</label><input type="text" ref="message" />
        <button>submit</button>
      </form>
    );
  }
});
// it's kind of return statement
module.exports = GreeterForm;
