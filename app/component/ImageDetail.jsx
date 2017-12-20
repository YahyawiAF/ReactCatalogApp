var React=require('react');
var Reflux =require('reflux');
var StorePhoto=require('PhotoStore');
var Addwish=require('AddWishList');


module.exports=React.createClass(
  {


  getInitialState: function(){
    return{
      image:''
    }
  },
    componentWillMount: function()
    {
       StorePhoto.find(this.props.params.id).then(image=>{
             this.setState({image:image})
       });

    },

    render:function()
    {
      const style={
        height:200,
        width:200,
        display:'inline-block',


      };
      const st={
        'textAlign':'center'
      };
      return <div style={style}>
        <div className="panel panel-default">
        <h4>{this.state.image.title}</h4>
        </div>
        <div style={st} >
        <img src={this.state.image.url}></img>
      </div>
          <div className="panel-footer">
         <h5>{this.state.image.title}</h5>
         <Addwish image={this.state.image}></Addwish>
          </div>


        </div>

    },

  }
);
