var React=require('react');
var Action=require('Action');
var StorePhoto=require('PhotoStore');
var Reflux=require('reflux');
var Image=require('Image');

var Photo=React.createClass({
mixins:[
  Reflux.listenTo(StorePhoto,'onChange')
],
getInitialState : function()
{
  return {
    photos:[]
  }
},
componentWillMount :function()
{
Action.getPhotos(this.props.params.id);
},
componentWillReceiveProps:function(nextProps)
{
  Action.getPhotos(nextProps.params.id);
},
  render:function()
  {
    const style={
      'textAlign':'center'
    };
    return <div style={style} >

      {this.renderImages()}

    </div>
  },
  renderImages: function()
  {
    return this.state.photos.map(
      function(image){
      return <Image key={image.id} image={image}/>
      }
    );
  },
  onChange:function(event,photos)
  {
    this.setState({photos:photos})
  }
});

module.exports=Photo;
