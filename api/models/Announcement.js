/**
* Announcement.js
*
* @description :: Represents the Announcement posted on the home page.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    from : {
      type : "string"
    },
  	datetime : {
      type : "string"
    },
  	title : {
      type : "string"
    },
  	body : {
      type : "string"
    },
    img : {
      type : "string"
    }
  }
};
