<template>
    <div class="tasks">
    <div class="q-gutter-y-md">
      <q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Create New', value: 'create' },
          { label: 'Manage Tasks', value: 'manage' }
        ]"
      />

      <div class="create-pd">
      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
        <q-tab-panel name="create">
          <div class="text-h6">Create New Task</div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

              <q-input filled v-model="taskname" label="Task Description *" lazy-rules />

              <q-select filled v-model="taskproject" :options="options" label="Select Project for Task *" />

              <q-select filled v-model="taskmembers" multiple :options="members" label="Select Member / Members for Task *" />

              <q-select filled v-model="taskurgency" :options="urgency" label="Select Level of Ugency *" />


              <div>
                  <q-btn label="Create" type="submit" color="primary" />
                  <q-btn label="Clear" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
          </q-form>
        </q-tab-panel>

        <q-tab-panel name="manage">

        	<q-table :data="data" title="Active Tasks" row-key="task_title" :columns="columns" selection="single" :selected.sync="selected"/>

        	<div :disabled="!selected.length > 0" class="tb-btn">
		        <q-btn label="Complete" type="submit" color="green"/>
		        <q-btn label="Delete" type="reset" color="red" class="q-ml-sm" />
		      </div>

        	<q-table :data="data" title="Completed Tasks" :columns="columns" />

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
			model:null,
			options:['Jenga-Docs','Rony-Quail'],
            members: ["member 1", "member 2", "member 3"],
            urgency:["Very Urgent", "Urgent","Regular"],
      taskname:'',
      taskproject:'',
      taskmembers:null,
			selected: [],
			columns:[
	        { name: 'task', align: 'center', label: 'Task Title', field: 'task_title', sortable: true },
	        { name: 'member', align: 'center', label: 'Assigned To', field: 'member', sortable: true },
	        { name: 'member', align: 'center', label: 'Project', field: 'project', sortable: true },
	        { name: 'date_created', align: 'center', label: 'Date Created', field: 'date_created', sortable: true }
         ],
         data:[{
         	task_title:'Fix Jenga Docs html2canvas',
         	member:'member1',
         	project:'Jenga-Docs',
         	date_created:'12/12/20'
         },
         {
         	task_title:'Push new jenga',
         	member:'member2',
         	project:'Jenga-Docs',
         	date_created:'12/12/20'
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