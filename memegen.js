var react = require('react');

var  ReactDOM = require('react-dom');

var helloWorld = react.createClass(function(){

render:function(){

            return(

            <div>Hello World</div>

);

   }

});

ReactDOM.render(

 < helloWorld />,

 document.getElementById('hello')

);