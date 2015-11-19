/**
 * ImageStoreController
 *
 * @description :: Server-side logic for managing imagestores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getDataUri :	function (req, res) {
		  var __id = req.params["id"];
			ImageStore.findOne({id:__id}).exec(function(err,data){
				if (err) {
					console.error(err);
					res.serverError("Something odd happened, we are trying to fix that :( ");
				}else {
					res.send(data.base64);
				}
			})

		}
};
