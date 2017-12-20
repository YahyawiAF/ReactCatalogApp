var axios = require('axios');
var Url_Json="http://jsonplaceholder.typicode.com";
module.exports = {
  albums:[],
  get: function (ask) {
    return axios.get(Url_Json+ask)
    .then(res => {
        this.albums = res.data;
        return this.albums;
    })
  }
}
