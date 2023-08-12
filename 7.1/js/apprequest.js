const app = Vue.createApp({	})
app.component('app-readjson', {   
	data: function(){
		return  {msg: [ ]} 
	},  
	template: `	
    <h1>JsonPlaceholder Data</h1>
	<ul>
		<li v-for="m in msg">
            {{ m.id }} -- {{ m.title }}   
		</li>
	</ul>
	`,
	mounted() { 
		var self = this;
		$.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
			self.msg = data;
    		})
		.fail(function() { alert('Unable to complete getJSON request! '); })
  	}
})

app.mount('#app')