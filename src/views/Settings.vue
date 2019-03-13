<template>
	<form class="container-fluid" style="margin-bottom: 100px;">
	    <!-- Page Heading -->
	    <div class="d-sm-flex align-items-center justify-content-between mb-4">
	      <h1 class="h3 mb-0 text-gray-800">Settings</h1>
	      <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
	        <i class="fas fa-cogs fa-sm text-white-50"></i> Save Settings
	      </a>
	    </div>
	    <b-tabs>
	    	<b-tab title="Form-Data Settings">
	    		<b-container fluid>
	    			<br/>
	    			<br/>
	                <b-row role="form">
	                  <b-col md="12" sm="12">
	                    <div class="form-group row has-error">
	                      <label class="control-label"></label>
	                      <b-form-select v-model="selected_form" :options="settings.forms" class="col-md-6"/>

	                      {{selected_form}}
	                    </div>
	                  </b-col>
	                  <hr class="my-5" style="width: 100%" />
	                 </b-row>
	             </b-container>
	    	</b-tab>
	    	<b-tab title="Application Settings">
	    		<b-container fluid>
	    			<br/>
	    			<br/>
	                <b-row role="form" id="p_form">
	                  <b-col md="6" sm="6">
	                    <div class="form-group has-error">
	                      <label class="control-label">Company Name</label>
	                      <input type="text" class="form-control" id="report_id">
	                    </div>
						<b-row>
						  <b-col md="6" sm="6">
						    <div class="form-group has-error">
						      <label class="control-label">Name Abbreviation</label>
						      <input type="text" class="form-control">
						    </div>
						  </b-col>
						  <b-col md=6 sm="6">
						    <div class="form-group has-error">
						      <label class="control-label">Reg Number</label>
						      <input type="text" class="form-control">
						    </div>
						  </b-col>
						</b-row>
	                  </b-col>
	                  <b-col md="6" sm="6">
	                    <div class="form-group has-error">
	                      <label class="control-label">Company Address</label>
	                      <textarea  class="form-control" style="max-height: 125px; min-height: 125px;"></textarea>
	                    </div>
	                  </b-col>
	                  <hr class="my-5" style="width: 100%" />
	                  <b-col md="6" sm="6">
	                    <div class="form-group has-error">
	                      <label class="control-label">Dispatch Email Address</label>
	                      <input type="text" class="form-control">
	                    </div>
	                  </b-col>
	                  <b-col md="3" sm="6">
	                    <div class="form-group has-error">
	                      <label class="control-label">Email Password</label>
	                      <input type="text" class="form-control">
	                    </div>
	                  </b-col>
	                  <b-col md="3" sm="6">
	                    <div class="form-group has-error">
	                      <label class="control-label">Email Service</label>
	                      <input type="text" class="form-control">
	                    </div>
	                  </b-col>
	                  <b-col md="6" sm="6">
	                    <div class="form-group has-error">
	                      <label class="control-label">Email Server</label>
	                      <input type="text" class="form-control">
	                    </div>
	                  </b-col>
	                  <b-col md="3" sm="6">
	                    <div class="form-group has-error">
	                      <label class="control-label">Port Number</label>
	                      <input type="text" class="form-control">
	                    </div>
	                  </b-col>
	                  <b-col md="3" sm="6">
	                    <div class="form-group has-error">
	                      <label class="control-label">Email Sender (From: ...)</label>
	                      <input type="text" class="form-control">
	                    </div>
	                  </b-col>
	                  <hr class="my-5" style="width: 100%" />
	                  <b-col md="3" sm="6">
	                    <div class="form-group has-error">
	                      <label class="control-label">App Logo</label>
	                    	<article class="card col-md-12" style="max-width: 20rem;">

	                    		<div class="form-group row has-error">
			                      <b-form-file class="form-control" @change="setL" :state="false" accept=".jpg, .png"
			                      placeholder="Select Logo" v-model="settings.logo"></b-form-file>
			                    </div>
	                    		<b-button @click="clear('logo')" class="btn-block" variant="primary">Clear Image</b-button> 
	                    		<img :src="logo" alt="Image" class="card-img-bottom">
							</article>

	                	</div>
	                  </b-col>
	                  <b-col md="3" sm="6">
	                    <div class="form-group has-error">
	                      <label class="control-label">Menu Icon</label>
	                    	<article class="card col-md-12" style="max-width: 20rem;">

	                    		<div class="form-group row has-error">
			                      <b-form-file class="form-control" @change="setI" :state="false" accept=".jpg, .png"
			                       placeholder="Select Icon" v-model="settings.icon"></b-form-file>
			                    </div>
	                    		<b-button @click="clear('icon')" class="btn-block" variant="primary">Clear Icon</b-button> 
	                    		<img :src="icon" alt="Image" class="card-img-bottom">
							</article>

	                	</div>
	                  </b-col>
	                  <b-col md="6" sm="6">
	                  	<b-row>
		                  <b-col md="6" sm="6">
		                    <div class="form-group has-error">
		                      <label class="control-label">Menu Color</label>
		                      <input type="color" class="form-control" id="form_id">
		                    </div>
		                  </b-col>
		                  <b-col md="6" sm="6">
		                    <div class="form-group has-error">
		                      <label class="control-label">Menu Background</label>
		                      <input type="color" class="form-control">
		                    </div>
		                  </b-col>
			            </b-row>
			          </b-col>
	            	</b-row>
	          </b-container>
	    	</b-tab>
	    	<b-tab title="User Settings">
	    	</b-tab>
	    </b-tabs>
	</form>
</template>
<script>
	export default {
	  name: "settings",
	  data() {
	    return {
	      settings: {
	      	logo: {},
	      	icon: {},
		    forms: [
		    	{text: '1', value: '1'},
		    	{text: '2', value: '2'}
		    ],
	      },
	      logo: '',
	      icon: '',
	      selected_form: '',
	      imgsrc: [
	        require('@/assets/img/bg.jpg'),
	        require('@/assets/img/bg3.jpg'),
	        require('@/assets/img/bg11.jpg'),
	        require('@/assets/img/bg5.jpg'),
	        require('@/assets/img/bg6.jpg'),
	        require('@/assets/img/bg8.jpg'),
	        require('@/assets/img/bg9.jpg'),
	        require('@/assets/img/bg10.jpg'),
	        require('@/assets/img/bg7.jpg')
	      ],
	      types: [
	        "text",
	        "password",
	        "email",
	        "number",
	        "date",
	        `time`,
	        "range",
	        "color"
	      ]
	    };
	  },
	  computed: {
		// forms_options: function() {
		//   return window.logo//'https://picsum.photos/600/300/?image=25'
		// }
	  },
	  methods: {
	  	clear: function(name) {
	  		this.settings[name] = {};
	  		console.log(this[name]);
	  		this[name] = '';
	  	},
		setI: function(event) {

	  		var a = this;

	  		var fr = new FileReader();
	  		fr.onloadend = function(result){
	  			// 
	  			console.log(fr.result)
	  			console.log(this.icon);
	  			a.icon = fr.result;
	  			a.settings.icon = fr.result;
	  			return (result);
	  		}
	  		fr.readAsDataURL(event.target.files[0]);
	  		console.log(event.target.files[0])
	  	},
		setL: function(event) {

	  		var a = this;

	  		var fr = new FileReader();
	  		fr.onloadend = function(result){
	  			// 
	  			console.log(fr.result)
	  			console.log(this.logo);
	  			a.logo = fr.result;
	  			a.settings.logo = fr.result;
	  			return (result);
	  		}
	  		fr.readAsDataURL(event.target.files[0]);
	  		console.log(event.target.files[0])
	  	}
	  }
	};
</script>
<style >
	.nav-tabs{
		padding-left: 20%;
	}
	.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
		background: transparent;
		border-color: #dddfeb #dddfeb #f8f9fc;
	}
</style>