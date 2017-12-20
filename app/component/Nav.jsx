var React = require('react');
var {Link,IndexLink} =require('react-router');


var Nav= React.createClass(
  {
    render:function(){
      return(
      <div className="top-bar" >
         <div className="top-bar-left">
           <ul className="menu">
             <li className="menu-text">CatalogApp</li>
             <li>
              <IndexLink to="/">Album</IndexLink>
             </li>
             <li>
              <Link to="photo" >Photo</Link>
             </li>

           </ul>
         </div>
         <div className="top-bar-right">
               <Link to="wish" >wishlist</Link>
         </div>
      </div>
      );

    }
  }
);
module.exports= Nav;
