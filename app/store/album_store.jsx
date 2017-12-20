var Api =require('Api');
var Reflux =require('reflux');
var Action=require('Action');

module.exports=Reflux.createStore({
 listenables: [Action],
  getAlbums:function()
  {
    return Api.get("/albums").then(res => {
           this.album=res;
           this.triggerChange();
    });
  },
  triggerChange:function()
  {
    this.trigger('change',this.album);
  }
});
