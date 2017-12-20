var React = require('react');
var Nav =require('Nav');
var album=require('Album');


var Main= React.createClass(
  {
    render:function(){
      return (
        <div>
          <Nav/>
        {this.content()}
        </div>
      );
    },
    content:function()
    {
      if(this.props.children)
      {
        return this.props.children
      }
      else{return <album/>}
    }
  }
);
module.exports= Main;
