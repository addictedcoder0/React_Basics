
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
    var namefrombox = this.refs.name.value
    if(namefrombox.length > 0){
      this.refs.name.value=''
      this.props.onNewName(namefrombox);
    }
  },

  render : function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" />
        <button>setName</button>
      </form>
    );
  }
});

var Greeting =  React.createClass({
    getDefaultProps : function(){
      return {
        name: 'React' ,
        message : 'if it is not Better then it is not the End'
      };
    },


    // predefined react function
    getInitialState : function(){
      return {
        name : 'Rudra'
      };
    },

    handleNewName : function(name){
      this.setState({
        name:name
      });
    },


// Nesting Conponents : [GreetingRenderer,GreetingForm]
    render :function(){
      var name = this.state.name;
      var message = this.props.message;
      return (
        <div>
          <GreetingMessage name={name} message={message}/>
          <GreetingForm onNewName={this.handleNewName} />

      </div>
      )
    }
});


var author_name = 'Rudra'
// rendering with property
ReactDOM.render(
  <Greeting name={author_name} message="Message passed as an attribute "/>,document.getElementById('app')
);

//rendering without property
// ReactDOM.render(
//   <Greeting />,document.getElementById('app')
// );
