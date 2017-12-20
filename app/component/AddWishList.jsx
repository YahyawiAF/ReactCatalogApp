var React=require('react');
var firebase=require('firebase');



var config = {
    apiKey: "AIzaSyBcnNR6kfLgdQDthuCczOoJS-_6SHz5tt8",
    authDomain: "catalogapp-aa9f2.firebaseapp.com",
    databaseURL: "https://catalogapp-aa9f2.firebaseio.com",
    projectId: "catalogapp-aa9f2",
    storageBucket: "catalogapp-aa9f2.appspot.com",
    messagingSenderId: "376378162435"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();
  var catalogRef=firebaseRef.child('Catalog');

module.exports=React.createClass({


  render : function(){
    const style={
    'textAlign':'center'
    };
    return <div>
       <button type="button" className="success button" onClick={this.handleClick} style={style}>add to Wish list</button>
    </div>
  },
  handleClick: function()
  {
    catalogRef.push(
      {
        image:this.props.image
      }
    );
    alert("image ");
  }
});
