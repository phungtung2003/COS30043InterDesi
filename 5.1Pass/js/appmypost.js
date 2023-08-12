const app = Vue.createApp({});

app.component(
  "app-mypost", 
  {
    data: function () {
      return {
        statPosts: [],
        strStatus: "",
      };
    },

    

    template: `
		<div>
			<h1>Status:	
				<input type="text" v-model="strStatus" >
				<button v-on:click="add(strStatus)">Post</button>
			</h1>
			<div v-for="(status,index) in statPosts">
				<p>
					{{ status }}   
					<button v-on:click="remove(index)">Del</button>   
				</p>
			</div>
		</div>`,

    

    methods: {
      add: function (status) {
     
        if (this.strStatus.trim() != "") {
          this.statPosts.push(status);
          this.strStatus = "";
        } else alert("Status cannot be empty");
      },
      remove: function (index) {
        
        this.statPosts.splice(index, 1);
      },
    },
  }
);

app.mount("#app");
