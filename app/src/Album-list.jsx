var React =require('react');
var Reflux=require('reflux');
var store=require('Store');
var Action=require('Action');
var {Link} =require('react-router');

module.exports=React.createClass(
  {
    mixins:[
      Reflux.listenTo(store,'onChange')
    ],


    getInitialState:function(){
      return{
          album:[]
      }
    },
    componentWillMount:function(){
     Action.getAlbums();
    },
    render:function(){
     return <div>
       <div className="panel panel-default">
         <div className="panel-heading">
            <h4>  Albums
              {this.renderAlbum()}</h4>
         </div>
       </div>
  </div>
},
renderAlbum:function()
{

  return this.state.album.map(function(album){
    return  <Link to={"photo/"+album.id}><li>{album.title}</li>
</Link>


   });

},
onChange:function(event,album)
{
  this.setState({album:album});
}
}
);
