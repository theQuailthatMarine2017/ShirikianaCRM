<template>
  <div class="signin">
    <div class="text-h3 text-center header">Sign In To Portal</div>
    <div class="text-h5 text-center sub-header">Manage Your Projects All In One Place!</div>
    <div class="q-pa-md form">

    	<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md text-center">

          <q-input filled v-model="email" label="Acount Email *" lazy-rules />

      		<q-input filled v-model="password" label="Account Password *" lazy-rules :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
      			<template v-slot:append>
		          <q-icon
		            :name="isPwd ? 'visibility_off' : 'visibility'"
		            class="cursor-pointer"
		            @click="isPwd = !isPwd"
		          />
		        </template>

      		</q-input>

      <div>
        <q-btn @click="signin" label="Sign In" glossy type="submit" color="primary"/>
      </div>
    </q-form>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{

  created(){

    
  },
  mounted(){

    
  },

  data(){
    return{

      email:'',
      password:'',
      isPwd: true

    }
  },
	methods:{
		signin(){

      let user = {
        email: this.email,
        password: this.password
      }

      axios.post('api/freelancer-ke/login', user).then( response => {

        console.log(response.data)
        

          if (response.data != null) {

            localStorage.setItem('token',response.data.token)
            localStorage.setItem('account',response.data.admin[0])
            this.$router.push({ path : '/dashboard'})

          }

      });
		}
	}

}
</script>

<style scoped>

.header{
	padding-top:40px;
}

.sub-header{
	padding:15px;
}


</style>