
/*
 * GET home page.
 */
var Notice = require('../models/notice.js');
exports.index = function(req, res){
	var notcon;
	//db.thiscollection.find().sort({"thisfieldname":-1}).limit(1)

	Notice.find({}).exec(function(err,val){
		if(err)
			throw err;
		else
			for(var v in val){
				var vv = val[v];
				notcon = vv['contents'];
			}
	});
	if(req.session.user_id == null && req.session.lv == null){
		res.render('index', { 'title': 'WiltseReservateSystem','notcon':notcon});
	}else{
		res.render('index', { 'title': 'WiltseReservateSystem','user_id':req.session.user_id, 'lv':req.session.lv, 'notcon':notcon});
	}
	
};
