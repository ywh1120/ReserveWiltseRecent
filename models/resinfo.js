var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var resSchema = new Schema({
	date : String,//예약을 실행한 날짜  
	reservdate : String,//실제 예약날짜
	reservid : String,//예약한 사람 아이디
	time : String,//예약시간대
	reservtime : String,//예약을 실행한 시간
	patient_number : String,//환자번호
	patient_name : String,//환자이름
	description : String,//검사명
	part : String,//부서
	state : String,//상태
	cancel_state : String,//취소여부
	cancel_id : String,//취소자아이디
	mri_number : String//예약한 기기 번호(1 or 2)
}); 

module.exports = mongoose.model('resinfos', resSchema);