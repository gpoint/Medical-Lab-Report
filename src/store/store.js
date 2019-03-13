import PouchDB from '@/plugins/pouchdb.js'
import Vue from 'vue'
import Vuex from 'vuex'


window.users = new PouchDB('users');
window.reports = new PouchDB('reports');
window.settings = new PouchDB('settings');

reports.info().then(function (info){
	console.log(info)
});


Vue.use(Vuex)

//rv = return value;

var store = new Vuex.Store({
  
  state: {
  	user: null,
  	users: window.users,
  	reports: window.reports,
  	settings: window.settings,
    reportaction: {
      mail: '',
      print: '',
      save: ''
    }
  },

  mutations: {

  	mail: function(state, url){
  		state.reportaction.mail = url;
  	},
  	print: function(state, url){
  		state.reportaction.print = url;
  	},
  	save: function(state, url){
  		state.reportaction.save = url;
  	}
  },
  actions: {

  }
});

// store.hotUpdate({
// 	state: {
// 		reportaction: {
// 	      mail: '',
// 	      print: '',
// 	      save: ''
// 	    }
// 	},
// 	mutations: {
// 		mail: function(state, url){
// 	  		state.reportaction.mail = url;
// 	  	},
// 	  	print: function(state, url){
// 	  		state.reportaction.print = url;
// 	  	},
// 	  	save: function(state, url){
// 	  		state.reportaction.save = url;
// 	  	}
// 	}
// });

export default store;
