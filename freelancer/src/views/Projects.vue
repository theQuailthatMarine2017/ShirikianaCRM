<template>
  <div class="projects">
    <div class="q-gutter-y-md">
      <q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Create New', value: 'create' },
          { label: 'Manage Projects', value: 'manage' }
        ]"
      />

      <div class="create-pd">
      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
        <q-tab-panel name="create">
          <div class="text-h6">Create New Project</div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

      <q-input filled v-model="project_name" label="Project Name *" hint="What is the Project called?" lazy-rules />

      	<q-input filled v-model="project_client" label="Project Client *" hint="Name of Client Responsible for Project" lazy-rules />

      		<q-input filled type="project_budget" v-model="age" label="Project Budget *" hint="How much is Client Paying?" lazy-rules />

      		<q-input filled v-model="project_description" label="Project Description *" hint="What is the Project for?" lazy-rules />

      <div>
        <q-btn label="Create" type="submit" color="primary"/>
        <q-btn label="Clear" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
        </q-tab-panel>

        <q-tab-panel name="manage">

        	<q-table :data="data" title="Active Projects" row-key="project_title" :columns="columns" selection="single" :selected.sync="selected"/>

        	<div :disabled="!selected.length > 0" class="tb-btn">
		        <q-btn label="Complete" type="submit" color="green"/>
		        <q-btn label="Delete" type="reset" color="red" class="q-ml-sm" />
		      </div>

        	<q-table :data="data" title="Completed Projects" row-key="project_title" :columns="columns" />

        </q-tab-panel>

      </q-tab-panels>
  </div>
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			panel: 'create',
      project_name:'',
      project_client:'',
      project_budget:null,
      project_description:'',
			selected: [],
			columns:[
	        { name: 'title', align: 'center', label: 'Project Title', field: 'project_title', sortable: true },
	        { name: 'client', align: 'center', label: 'Client', field: 'client', sortable: true },
	        { name: 'budget', align: 'center', label: 'Budget', field: 'budget', sortable: true },
	        { name: 'description', align: 'center', label: 'Description', field: 'description', sortable: true },
	        { name: 'date_created', align: 'center', label: 'Date Created', field: 'created_on', sortable: true }
         ],
         data:[{
         	project_title:'Jenga-Docs',
         	client:'Jane Quail',
         	budget:'Ksh 4000',
         	description:'Online Receipt and Invoice Generator',
         	created_on: '12/1/20'
         },
         {
         	project_title:'Rony Quail',
         	client:'Personal',
         	budget:'null',
         	description:'Web Portfolio Website',
         	created_on: '12/1/20'
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
