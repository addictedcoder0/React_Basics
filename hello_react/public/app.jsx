var Greeting =  React.createClass({
    getDefaultProps : function(){
      return {
        name: 'React' ,
        message : 'Message from Default section '
      };
    },

    render :function(){
      var name = this.props.name;
      var message = this.props.message;
      return (
        <div>
          <h1>Hello {name}</h1>
          <h3>{message +' !!!'}</h3>
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
