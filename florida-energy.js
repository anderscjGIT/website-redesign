



Vue.component('navnav', {
	template: '#navigation-container'
}); 

	
var nav = new Vue({
 el: '#nav-cont',
 
});


var app = new Vue({
   el: '#heading-home',
   data: {
     message: "Energy Education and Energy Jobs"
   }
})


var app = new Vue({
   el: '#heading-industry',
   data: {
     message: "Energy Industry"
   }
})

var app = new Vue({
   el: '#heading-education',
   data: {
     message: "Energy Education"
   }
})
