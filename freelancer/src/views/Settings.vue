<template>

	<div class="spacing">

	<div class="text-h6">Main Settings
          </div>
          <q-form class="q-gutter-md">



      		<q-input filled v-model="businessname" label="Business Name *" lazy-rules />

          <p><strong>Upload Company Logo</strong></p>
          <q-input filled v-model="businesslogo" placeholder="Upload Company Logo" type="file"/>

      		<q-input filled v-model="businessemail" label="Business Email *" lazy-rules />

      		<q-input filled v-model="businesmobile" label="Business Mobile *" lazy-rules />

      		<q-input v-model="businesslocation" filled label="Business Location *" type="textarea" />

      		<q-input filled v-model="accountname" label="Business Payable Account Name *" hint="For MPESA PAYBILL write PAYBILL ACCOUNT NAME, For BANK ACCOUNT write BANK ACCOUNT NAME" lazy-rules />

      		<q-input filled v-model="accountnumber" type="number" label="Business Payabe Account Number *" hint="For MPESA BUY GOODS write BUY GOODS TILL NUMBER, For BANK ACCOUNT write BANK ACCOUNT NUMBER" lazy-rules />


      <div>

        <q-btn label="Complete" @click="completeSettings" type="submit" color="primary"/>

      </div>
    </q-form>

</div>

</template>

<script>
export default {

	data(){
		return {
			model: 'one',
      imgs:null,
      businesslogo:null,
      businessname:'',
      businessemail:'',
      businesslocation:'',
      businesmobile:'',
      accountname:'',
      accountnumber:null,
      secondModel: 'one',
		      teal: false
		}
	},
  methods:{
    completeSettings(){
      console.log(this.logo)
    }
  }

}
</script>

<style scoped>



.spacing{
	padding:20px;
}

</style>