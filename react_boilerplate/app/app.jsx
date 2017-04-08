var React = require('react');
var ReactDOM =  require('react-dom');


//inorder to provide the support from the ES6 features like the one below , we need to install babale-stage0 preset and add into webpackconfig
var objOne = {
  name : 'Rudra',
  location:'india'
};

var objTwo = {
  age : 25,
  ...objOne
};

console.log(objTwo)

// if we run "webpack -w" then it will listen the changes done and immediately bundle the changes ,
//so just on a refresh we can see the changes reflected in the browser.
var author_name = 'Rudra';
ReactDOM.render(
  <h1>Hello , {author_name}</h1>,document.getElementById('app')
);
