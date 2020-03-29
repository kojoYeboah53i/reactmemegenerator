var react = require('react');
var  ReactDOM = require('react-dom');
var content= react.createClass(function(){
render:function(){
            return(
            <div>This is content</div>
);
}
});
ReactDOM.render(
  < content />,
  document.getElementById(' content ')
);