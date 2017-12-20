var React = require('react');
var {Link} = require('react-router');

module.exports=React.createClass({
  render:function(){
    const style={
      height:200,
      width:200,
      display:'inline-block'
    };
    return <Link to={"images/"+this.props.image.id} style={style}>

      {this.image()}
    </Link>
  },
  image:function()
  {
    return <img src={this.props.image.url} key={this.props.image.id}></img>
  }
})
