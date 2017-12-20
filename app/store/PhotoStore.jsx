var Api =require('Api');
var Reflux =require('reflux');
var Action=require('Action');
var _=require('lodash');
module.exports =Reflux.createStore(
  {
    listenables: [Action],
    getPhotos:function(id){
      return Api.get('/albums/'+id+'/photos').then(res => {
             this.photos=res;
             this.triggerChange();
      });
    },
    find:function(id)
    {
    return Api.get('/photos/'+id).then(res=>{
                      this.image=res;
                      return this.image;
    });

    },
    triggerChange:function(){
      this.trigger('change',this.photos);
    }
  }
);
