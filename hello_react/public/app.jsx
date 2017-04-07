var Greeting =  React.createClass({
    getDefaultProps : function(){
      return {
        name: 'React' ,
        message : 'Message from Default section '
      };
    },

    onButtonClick : function (e){
      e.preventDefault();
      var namefrombox = this.refs.name.value;
      this.setState({
        name:namefrombox
      });
    },
    // predefined react function
    getInitialState : function(){
      return {
        name : 'Rudra'
      };
    },

    render :function(){
      var name = this.state.name;
      var message = this.props.message;
      return (
        <div>
          <h1>Hello {name}</h1>
          <h3>{message +' !!!'}</h3>
          <form onSubmit={this.onButtonClick}>
            <input type="text" ref="name" />
            <button>setName</button>
          </form>
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
