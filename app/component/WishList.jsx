var React=require('react');
var firebase=require('firebase');



  var firebaseRef = firebase.database().ref();
  var catalogRef=firebaseRef.child('Catalog');

  module.exports=React.createClass({
    getInitialState : function()
    {
      return {
        album:[]
      }
    },
    render : function(){
     return <div>{this.getAlbum()}
     </div>
  },
  getAlbum : function()
  {
      catalogRef.once('value').then((snapshot)=>{
     var photos = snapshot.val();


     Object.keys(photos).forEach((photoId)=>{
            this.state.album.push({
           id:photoId,
           image:photos[photoId]
            });
     });
   });
  return this.state.album.map(
    function(alb){
      const style={
        height:200,
        width:200,
        display:'inline-block'
        
      };
    return <div style={style}><img src={alb.image.image.url}></img></div>
    }
  );

  }

  });
