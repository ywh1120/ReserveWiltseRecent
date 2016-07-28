var Member = require('../models/member.js');
var Reserve = require('../models/resinfo.js');
var Notice = require('../models/notice.js');
function getTimeStamp() {
	  var d = new Date();

	  var s =
	    leadingZeros(d.getFullYear(), 4) + '/' +
	    leadingZeros(d.getMonth() + 1, 2) + '/' +
	    leadingZeros(d.getDate(), 2)

	  return s;
}



function leadingZeros(n, digits) {
	var zero = '';
	  n = n.toString();

	  if (n.length < digits) {
	    for (i = 0; i < digits - n.length; i++)
	      zero += '0';
	  }
	  return zero + n;
}

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
		var nine = [];
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
		var eighteen = [];
		
		var nine2 = [];
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
		var eighteen2 = [];
		if (err){
			throw err;
		}
		if(valid){
			for(var val in valid){
				var v = valid[val];
			    switch(v['time']){
			    case '09:00':
			    	if(v['mri_number'] == '1')
			    		nine = v;
			    	else if(v['mri_number'] == '2')
			    		nine2 = v;
			    	break;
			    case '09:30':
			    	if(v['mri_number'] == '1')
			    		ninethree = v;
			    	else if(v['mri_number'] == '2')
			    		ninethree2 = v;
			    	break;
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
			    case '12:30':
			    	if(v['mri_number'] == '1')
			    		thirteenthree = v;
			    	else if(v['mri_number'] == '2')
			    		thirteenthree2 = v;
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
			    case '18:00':
			    	if(v['mri_number'] == '1')
			    		eighteen = v;
			    	else if(v['mri_number'] == '2')
			    		eighteen2 = v;
			    	break;
			    }
			}
		    res.send({nine:nine,
		    	ninethree:ninethree,
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
		    	eighteen:eighteen,
		    	nine2:nine2,
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
		    	seventeenthree2:seventeenthree2,
		    	eighteen2:eighteen2
		    	});
		}else{
			res.send('failed');
		}
		
	});
};

exports.reservate=function(req,res){
		var flag = true;
		var gettime = new Date();
		if(req.session.user_id != 'mri'){
			if(req.body.resdate == getTimeStamp()){//예약 날짜가 오늘일때
				switch(req.body.time){//시간대별로 조건문 걸어서 해당시간보다 크면 예약불가
					case '09:00':
			    	if(gettime.getHours() > 8){
			    		flag=false;
			    	}else if(gettime.getHours() == 8){
			    		if(gettime.getMinutes() > 40){
			    			flag=false;
			    		}
			    	}
			    	break;
					case '09:30':
			    	if(gettime.getHours() > 9){
			    		flag=false;
			    	}else if(gettime.getHours() == 9){
			    		if(gettime.getMinutes() > 10){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '10:00':
			    	if(gettime.getHours() > 9){
			    		flag=false;
			    	}else if(gettime.getHours() == 9){
			    		if(gettime.getMinutes() > 40){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '10:30':
			    	if(gettime.getHours() > 10){
			    		flag=false;
			    	}else if(gettime.getHours() == 10){
			    		if(gettime.getMinutes() > 10){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '11:00':
			    	if(gettime.getHours() > 10){
			    		flag=false;
			    	}else if(gettime.getHours() == 10){
			    		if(gettime.getMinutes() > 40){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '11:30':
			    	if(gettime.getHours() > 11){
			    		flag=false;
			    	}else if(gettime.getHours() == 11){
			    		if(gettime.getMinutes() > 10){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '12:00':
			    	if(gettime.getHours() > 11){
			    		flag=false;
			    	}else if(gettime.getHours() == 11){
			    		if(gettime.getMinutes() > 40){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '12:30':
			    	if(gettime.getHours() > 12){
			    		flag=false;
			    	}else if(gettime.getHours() == 12){
			    		if(gettime.getMinutes() > 10){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '14:00':
			    	if(gettime.getHours() > 13){
			    		flag=false;
			    	}else if(gettime.getHours() == 13){
			    		if(gettime.getMinutes() > 40){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '14:30':
			    	if(gettime.getHours() > 14){
			    		flag=false;
			    	}else if(gettime.getHours() == 14){
			    		if(gettime.getMinutes() > 10){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '15:00':
			    	if(gettime.getHours() > 14){
			    		flag=false;
			    	}else if(gettime.getHours() == 14){
			    		if(gettime.getMinutes() > 40){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '15:30':
			    	if(gettime.getHours() > 15){
			    		flag=false;
			    	}else if(gettime.getHours() == 15){
			    		if(gettime.getMinutes() > 10){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '16:00':
			    	if(gettime.getHours() > 15){
			    		flag=false;
			    	}else if(gettime.getHours() == 15){
			    		if(gettime.getMinutes() > 40){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '16:30':
			    	if(gettime.getHours() > 16){
			    		flag=false;
			    	}else if(gettime.getHours() == 16){
			    		if(gettime.getMinutes() > 10){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '17:00':
			    	if(gettime.getHours() > 16){
			    		flag=false;
			    	}else if(gettime.getHours() == 16){
			    		if(gettime.getMinutes() > 40){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '17:30':
			    	if(gettime.getHours() > 17){
			    		flag=false;
			    	}else if(gettime.getHours() == 17){
			    		if(gettime.getMinutes() > 10){
			    			flag=false;
			    		}
			    	}
			    	break;
			    case '18:00':
			    	if(gettime.getHours() > 17){
			    		flag=false;
			    	}else if(gettime.getHours() == 17){
			    		if(gettime.getMinutes() > 40){
			    			flag=false;
			    		}
			    	}
			    	break;
				}
			}
		}
		if(flag){
			var d = new Date();
			/*var reserve = new Reserve({
				"date" : req.body.resdate,
				"reservdate" :  getTimeStamp(),
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
			});*/
			
			Reserve.findOneAndUpdate({"time":req.body.time, "date":req.body.resdate, "mri_number":req.body.num},
				{
					"date" : req.body.resdate,
					"reservdate" :  getTimeStamp(),
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
				}
			,{"upsert":true,"new":true},function(err,silence){
		
		    	if(err){
		    		console.err(err);
		    		throw err;
		
		    		}
		    	res.send('success');
		    	/*var io = req.app.get('socketio');
		    	io.sockets.on('connection',function(socket){
	
		    		   socket.emit('toclient',{msg:'success'});
	
		    		   socket.on('fromclient',function(data){
	
		    		       socket.broadcast.emit('toclient',data); // 자신을 제외하고 다른 클라이언트에게 보냄
	
		    		       //socket.emit('toclient',data); // 해당 클라이언트에게만 보냄. 다른 클라이언트에 보낼려면?
	
		    		   })
	
		    		});
		    		*/
		    	
		    });
		}else{
			res.send('timeout');
		}
	
};
exports.reserveupd = function(req,res){
	var d = new Date();
	Reserve.update({"date" : req.body.resdate,
		"mri_number" : req.body.mrinum,
		"reservid" : req.session.user_id,
		"time" : req.body.time},{
		"reservdate" :  getTimeStamp(),
		"reservtime" : d.getHours()+':'+d.getMinutes(),
		"patient_number" : req.body.patient_number,
		"patient_name" : req.body.patient_name,
		"description" : req.body.description,
		"part" : req.body.part,
		"state" : '2',
		"cancel_state" : '',
		"cancel_id" : ''}).exec(function(err){
			if(err){
	    		console.err(err);
	    		throw err;
	
	    		}
	    	res.send('success');
	    	//var io = req.app.get('socketio');
		    //io.emit('success');
	});
};
exports.reservecancel=function(req,res){
	Reserve.findOne({"time":req.body.time, "date":req.body.resdate, "mri_number":req.body.num}).remove().exec(function(err){
		if(err)
			throw err;
		else
			res.send('success');
	});
};
exports.noticeinput=function(req,res){
	//var nn = new Notice({"contents":req.body.notice,"date":req.body.date});
	Notice.findOneAndUpdate({"date":req.body.date},{"contents":req.body.notice,"date":req.body.date},{"new":true,"upsert":true},function(err,silence){

    	if(err){
    		console.err(err);
    		throw err;

    		}

    	res.send('success');

    });
};
exports.noticeload=function(req,res){
	Notice.findOne().sort("-date").select('contents').exec(function(err,val){
		if(err){
			throw err;
		}else{ 
			//req.session.not = val['contents'];
			res.send(val);
		}
	});
};
exports.loadrsvr=function(req,res){
	//Reserve.find({"date" : {$gt:getTimeStamp()}}).exec(function(err,val){
	Reserve.find({"date" : getTimeStamp()}).exec(function(err,val){
		if(err){
			console.err(err);
			throw err;
		}else{
			res.render('loadrsvr', { 'val':val});
		}
	});
};