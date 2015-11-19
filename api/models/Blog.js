/**
* Blog.js
*
* @description :: Represents the blogs posted on the home page
* @docs        :: See sails documentation - http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    author : {
      type : "string"
    },
  	title : {
      type : "string"
    },
  	link  : {
      type : "string"
    },
  	img  : {
      type : "string"
    }
  }
};
