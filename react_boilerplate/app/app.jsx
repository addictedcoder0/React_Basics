var React = require('react');
var ReactDOM =  require('react-dom');

// if we run "webpack -w" then it will listen the changes done and immediately bundle the changes ,
//so just on a refresh we can see the changes reflected in the browser.
var author_name = 'Rudra';
ReactDOM.render(
  <h1>Hello , {author_name}</h1>,document.getElementById('app')
);
