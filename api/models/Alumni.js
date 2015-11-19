/**
* Alumni.js
*
* @description :: contains information on each Alumni.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    attributes: {
      "name" : {
        type : "string"
      } ,
    	"year" : {
        type : "string"
      } ,
    	"wentTo": {
        type : "string"
      } ,
    	"phone": {
        type : "string"
      } ,
      "mail" : {
        type : "string"
      } ,
    	"link" : {
        type : "string"
      } ,
    	"img" : {
        type : "string"
      }
    }
  }
};
