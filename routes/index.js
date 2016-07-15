
/*
 * GET home page.
 */

exports.index = function(req, res){
	var notcon;
	//db.thiscollection.find().sort({"thisfieldname":-1}).limit(1)

	if(req.session.user_id == null && req.session.lv == null){
		res.render('index', { 'title': 'WiltseReservateSystem'});
	}else{
		res.render('index', { 'title': 'WiltseReservateSystem','user_id':req.session.user_id, 'lv':req.session.lv});
	}
	
};
