 var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var album=require('Album');
var Photo=require('Photo');
var ImageDetail=require('ImageDetail');
var wishlist=require('WishList');

var {Route,Router,IndexRoute,hashHistory} = require('react-router');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <route path="photo/:id" component={Photo}/>
      <route path="wish" component={wishlist}/>
      <route path="images/:id" component={ImageDetail}/>
    <IndexRoute component={album}/>

    </Route>
  </Router>,
  document.getElementById('app')
);
