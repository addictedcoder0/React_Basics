var React = require('react');
var ReactDOM =  require('react-dom');
var Greeter =  require('./components/Greeter');

var author_name = 'Rudra';
ReactDOM.render(
  <Greeter name={author_name}/>,document.getElementById('app')
);
