var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var noticeSchema = new Schema({
	contents : {type:String}
});

module.exports = mongoose.model('notices', noticeSchema);