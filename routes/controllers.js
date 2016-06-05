var Member = require('../models/member.js');
var Reserve = require('../models/resinfo.js');

exports.login = function(req, res) {
	var flag=false;
  
	Member.findOne({ "id" : req.body.id, "pass" : req.body.pass}).select('id lv').exec(function(err, valid) {
		
		if (err){
			throw err;
		}
		if(valid){
			console.log(valid['id']);
		  req.session.user_id = valid['id'];
		  req.session.lv = valid['lv'];
			//req.session = valid;
			res.send(valid);
		}else{
			res.send('failed');
		}
		
	});
	
};

exports.signuppage = function(req, res){
	res.render('signuppage');
};

exports.signup=function(req,res,err){

    var member = new Member({"id":req.body.id,"pass":req.body.pass,"lv":req.body.lv});

    member.save(function(err,silence){

    	if(err){
    		console.err(err);
    		throw err;

    		}

    	res.send('success');

    });
};

exports.logout=function(req,res,err){
	if (req.session) {
		req.session.destroy(function() {});
	}
	res.send('destroyed');
};

exports.reservesrch=function(req,res){
	Reserve.find({ "date" : req.body.todayDate}).exec(function(err, valid) {
		var ninethree = [];
		var ten = [];
		var tenthree = [];
		var eleven = [];
		var eleventhree = [];
		var twelve = [];
		var thirteenthree = [];
		var fourteen = [];
		var fourteenthree = [];
		var fifteen = [];
		var fifteenthree = [];
		var sixteen = [];
		var sixteenthree = [];
		var seventeen = [];
		var seventeenthree = [];
		
		var ninethree2 = [];
		var ten2 = [];
		var tenthree2 = [];
		var eleven2 = [];
		var eleventhree2 = [];
		var twelve2 = [];
		var thirteenthree2 = [];
		var fourteen2 = [];
		var fourteenthree2 = [];
		var fifteen2 = [];
		var fifteenthree2 = [];
		var sixteen2 = [];
		var sixteenthree2 = [];
		var seventeen2 = [];
		var seventeenthree2 = [];
		if (err){
			throw err;
		}
		if(valid){
			for(var val in valid){
				var v = valid[val];
			    switch(v['time']){
			    case '09:30':
			    	if(v['mri_number'] == '1')
			    		ninethree = v;
			    	else if(v['mri_number'] == '2')
			    		ninethree2 = v;
			    	break;
			    case '10:00':
			    	if(v['mri_number'] == '1')
			    		ten = v;
			    	else if(v['mri_number'] == '2')
			    		ten2 = v;
			    	break;
			    case '10:30':
			    	if(v['mri_number'] == '1')
			    		tenthree = v;
			    	else if(v['mri_number'] == '2')
			    		tenthree2 = v;
			    	break;
			    case '11:00':
			    	if(v['mri_number'] == '1')
			    		eleven = v;
			    	else if(v['mri_number'] == '2')
			    		eleven2 = v;
			    	break;
			    case '11:30':
			    	if(v['mri_number'] == '1')
			    		eleventhree = v;
			    	else if(v['mri_number'] == '2')
			    		eleventhree2 = v;
			    	break;
			    case '12:00':
			    	if(v['mri_number'] == '1')
			    		twelve = v;
			    	else if(v['mri_number'] == '2')
			    		twelve2 = v;
			    	break;
			    case '13:30':
			    	if(v['mri_number'] == '1')
			    		thiteenthree = v;
			    	else if(v['mri_number'] == '2')
			    		thiteenthree2 = v;
			    	break;
			    case '14:00':
			    	if(v['mri_number'] == '1')
			    		fourteen = v;
			    	else if(v['mri_number'] == '2')
			    		fourteen2 = v;
			    	break;
			    case '14:30':
			    	if(v['mri_number'] == '1')
			    		fourteenthree = v;
			    	else if(v['mri_number'] == '2')
			    		fourteenthree2 = v;
			    	break;
			    case '15:00':
			    	if(v['mri_number'] == '1')
			    		fifteen = v;
			    	else if(v['mri_number'] == '2')
			    		fifteen2 = v;
			    	break;
			    case '15:30':
			    	if(v['mri_number'] == '1')
			    		fifteenthree = v;
			    	else if(v['mri_number'] == '2')
			    		fifteenthree2 = v;
			    	break;
			    case '16:00':
			    	if(v['mri_number'] == '1')
			    		sixteen = v;
			    	else if(v['mri_number'] == '2')
			    		sixteen2 = v;
			    	break;
			    case '16:30':
			    	if(v['mri_number'] == '1')
			    		sixteenthree = v;
			    	else if(v['mri_number'] == '2')
			    		sixteenthree2 = v;
			    	break;
			    case '17:00':
			    	if(v['mri_number'] == '1')
			    		seventeen = v;
			    	else if(v['mri_number'] == '2')
			    		seventeen2 = v;
			    	break;
			    case '17:30':
			    	if(v['mri_number'] == '1')
			    		seventeenthree = v;
			    	else if(v['mri_number'] == '2')
			    		seventeenthree2 = v;
			    	break;
			    }
			}
		    res.send({ninethree:ninethree,
		    	ten:ten,
		    	tenthree:tenthree,
		    	eleven:eleven,
		    	eleventhree:eleventhree,
		    	twelve:twelve,
		    	thirteenthree:thirteenthree,
		    	fourteen:fourteen,
		    	fourteenthree:fourteenthree,
		    	fifteen:fifteen,
		    	fifteenthree:fifteenthree,
		    	sixteen:sixteen,
		    	sixteenthree:sixteenthree, 
		    	seventeen:seventeen,
		    	seventeenthree:seventeenthree,
		    	ninethree2:ninethree2,
		    	ten2:ten2,
		    	tenthree2:tenthree2,
		    	eleven2:eleven2,
		    	eleventhree2:eleventhree2,
		    	twelve2:twelve2,
		    	thirteenthree2:thirteenthree2,
		    	fourteen2:fourteen2,
		    	fourteenthree2:fourteenthree2,
		    	fifteen2:fifteen2,
		    	fifteenthree2:fifteenthree2,
		    	sixteen2:sixteen2,
		    	sixteenthree2:sixteenthree2, 
		    	seventeen2:seventeen2,
		    	seventeenthree2:seventeenthree2
		    	});
		}else{
			res.send('failed');
		}
		
	});
};

exports.reservate=function(req,res){
	var flag = false;
	Reserve.findOne({reservid:req.session.user_id, time:req.body.time, date:req.body.resdate}).exec(function(){
		
	});
	var d = new Date();
	var reserve = new Reserve({
		"date" : req.body.resdate,
		"reservdate" :  d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate(),
		"reservid" : req.session.user_id,
		"time" : req.body.time,
		"reservtime" : d.getHours()+':'+d.getMinutes(),
		"patient_number" : req.body.patient_number,
		"patient_name" : req.body.patient_name,
		"description" : req.body.description,
		"part" : req.body.part,
		"state" : '2',
		"cancel_state" : '',
		"cancel_id" : '',
		"mri_number" : req.body.mrinum
	});
	
	reserve.save(function(err,silence){

    	if(err){
    		console.err(err);
    		throw err;

    		}

    	res.send('success');

    });
};

exports.reservecancel=function(req,res){
	Reserve.remove({reserveid:req.session.user_id, time:req.body.time, date:req.body.resdate},function(err){
		if(err)
			throw err;
		else
			res.send('success');
	});
};
