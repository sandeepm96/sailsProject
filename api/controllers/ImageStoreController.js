/**
 * ImageStoreController
 *
 * @description :: Server-side logic for managing imagestores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getImage :	function (req, res) {
		  var __id = req.params["id"];
			ImageStore.findOne({id:__id}).exec(function(err,data){
				if (err) {
					console.error(err);
					res.serverError("Something odd happened, we are trying to fix that :( ");
				}else {

					var img = new Buffer(data.base64.replace(/^data:image\/jpeg;base64,/, "").replace(/^data:image\/png;base64,/, ""), 'base64');
			    res.writeHead(200, {
			      'Content-Type': 'image/jpeg',
			      'Content-Length': img.length
			    });
			    res.end(img);
				}
			})

		}
};
