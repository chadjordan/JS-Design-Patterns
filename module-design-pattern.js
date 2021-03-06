/*
	Author: 		Roy Anonuevo
	Author URL: 	http://www.royanonuevo.com
	File name: 		module-design-pattern.js
	Description: 	Template in creating module design pattern.
	Dependencies: 	jQuery
*/

var App = App || {};

(function($){
	'use strict';
	
	App.module = {

		config: {
			effects: 'slideToggle',
			duration: 500
		},

		init: function(config){
			// Return if target element is not exists
			if(!$('#targetElement').length){return;} 

			// Merge defaults and options
			$.extend(this.config, config);

			// Cache DOM
			this.$window = $(window);
			this.$document = $(document);
			this.$parentElem = $('#parentElement');
			this.$childElem = this.$parentElem.find(".childElem");

			// Bind Listener
			this.$window.on('resize', this.winResize.bind(this));
			this.$document.on('click', this.document.bind(this));	
		},

		winResize: function(){
			console.log("window resized", this);
		},

		document: function(){
			console.log("document clicked", this);
		}
	};

	$(function(){
		App.module.init({
			effects: 'slideEffects',
			duration: 1000
		});
	});

})(jQuery);