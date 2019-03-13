// var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./actions/data');

var actions = {
	get_report: function() {
		return {
			r: {
				report_details: {
					firstname: 'pop'
				}
			}
		};
	},
	get_reports: function() {
	},
	save_report: function(r){
		console.log(r)
	}
};

export default actions;