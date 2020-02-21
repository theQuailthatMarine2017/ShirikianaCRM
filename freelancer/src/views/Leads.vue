<template>
	<div class="leads">
		<q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Create New Lead', value: 'create' },
          { label: 'Manage Leads', value: 'member' }
        ]"
      />

       <div class="create-pd">
      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">

      	 <q-tab-panel name="create">
		      	<div class="text-h6">Create Lead
		          </div>
	          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

	      		<q-input filled v-model="lead_name" label="Company / Business Name *" lazy-rules />

	      		<q-input filled v-model="email_lead" label="Company / Business Email *" lazy-rules />

	      		<q-input filled v-model="phone_lead" label="Company / Business Mobile *" lazy-rules />

		      <div>
		        <q-btn label="Create" type="submit" glossy color="primary"/>
		        <q-btn label="Clear" type="reset" color="red" glossy class="q-ml-sm" />
		      </div>
		    </q-form>
		</q-tab-panel>

		<q-tab-panel name="member">

			<q-table :data="data" title="Pending Leads" row-key="client_name" :columns="columns" selection="single" :selected.sync="selected"/>

        	<div :disabled="!selected.length > 0" class="tb-btn">
		        <q-btn label="Convert" type="reset" color="green" class="q-ml-sm" />
		        <q-btn label="Delete" type="reset" color="red" class="q-ml-sm" />
		      </div>

		      <q-table :data="data2" title="Converted Leads" row-key="client_name" :columns="columns2" selection="single" :selected.sync="selected"/>
		      	
		</q-tab-panel>

      </q-tab-panels>
 		 </div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			panel: 'create',
			isPwd: true,
			model:null,
			lead_name:'',
			email_lead:'',
			phone_lead:null,
			members:["member 1", "member 2"],
			selected: [],
			columns:[
	        { name: 'name', align: 'left', label: 'Lead Name', field: 'lead_title', sortable: true },
	        { name: 'email', align: 'left', label: 'Lead Email', field: 'lead_email', sortable: true },
	        { name: 'mobile', align: 'left', label: 'Lead Mobile', field: 'lead_mobile', sortable: true }
         ],
         columns2:[
	        { name: 'name', align: 'left', label: 'Lead Name', field: 'lead_title', sortable: true },
	        { name: 'email', align: 'left', label: 'Lead Email', field: 'lead_email', sortable: true },
	        { name: 'mobile', align: 'left', label: 'Lead Mobile', field: 'lead_mobile', sortable: true }
         ],
         data:[{
         	lead_title:'German Point',
         	lead_email:'german@point.com',
         	lead_mobile:'0722445345'
         }],
         data2:[{
         	lead_title:'Jane Quail',
         	lead_email:'j@q.com',
         	lead_mobile:'0722690333'
         }]
		}
	},
	methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    }
  }
}

</script>

<style scoped>

.create-pd{
	padding:15px;
}

.tb-btn{
	padding-top:15px;
	padding-bottom:15px;
}

</style>
