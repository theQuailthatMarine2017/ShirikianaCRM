<template>
  <div class="projects">
  	<div class="q-pa-md">
  		<div class="text-h6 account">Manage Account
		          </div>
  	<div class="account">
  	<q-input filled v-model="account_name" label="Edit Name *" lazy-rules />
  	</div>
  	<div class="account">
	<q-input filled v-model="account_email" label="Edit Email *" lazy-rules />
	</div>

	<div class="account">
	<p><strong>Change Profile Picture</strong></p>
          <q-input v-model="businesslogo" filled placeholder="Select Picture" type="file"/>
      </div>

	<div class="account">
	<q-input filled v-model="account_password" label="Edit Account Password *" lazy-rules :type="isPwd ? 'password' : 'text'" hint="Password with toggle">

		<template v-slot:append>
		          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
        </template>

    </q-input>
	</div>
	<div class="account">
		        <q-btn label="Update" type="submit" glossy color="primary"/>
		      </div>
	</div>
  </div>
</template>

<script>
export default{

	created(){

	},
	mounted(){

	},
	data(){
		return{
			account_name:'',
			account_email:'',
			account_password:'',
			account_img:null
		}
	}

}
</script>

<style scoped>

.account{
	padding:10px;
}

</style>