<template>
    <div class="tasks">
    <div class="q-gutter-y-md">
      <q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Create New Client', value: 'create' },
          { label: 'Add New Member', value: 'member' },
          { label: 'Manage Clients', value: 'manage_clients' },
          { label: 'Manage Members', value: 'manage_members' }
        ]"
      />

      <div class="create-pd">
      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
        <q-tab-panel name="create">
          <div class="text-h6">Create New Client
          </div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

      		<q-input filled v-model="client_title" label="Client Name *" lazy-rules />

      		<q-input filled v-model="client_mail" label="Client Email *" lazy-rules />

      		<q-input filled v-model="client_phone" label="Client Mobile *" lazy-rules />


      <div>
        <q-btn label="Create" type="submit" color="primary"/>
        <q-btn label="Clear" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
        </q-tab-panel>

        <q-tab-panel name="member">
        	 <div class="text-h6">Create New Member
          </div>
             <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                 <q-input filled v-model="name_member" label="Member Name *" lazy-rules />

                 <q-input filled v-model="email_member" label="Member Email *" lazy-rules />

                 <q-select filled v-model="title_member" :options="members" label="Member Title *" />

                 <q-input filled v-model="mobile_member" label="Member Mobile *" lazy-rules />

                 <q-input filled v-model="member_password" label="Member Account Password *" lazy-rules :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
                     <template v-slot:append>
                         <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                                 class="cursor-pointer"
                                 @click="isPwd = !isPwd" />
                     </template>

                 </q-input>

                 <q-select filled v-model="account_member" :options="options1" label="Select Project for Member *" />

                 <div>
                     <q-btn label="Create" type="submit" color="primary" />
                     <q-btn label="Clear" type="reset" color="primary" flat class="q-ml-sm" />
                 </div>
             </q-form>

        </q-tab-panel>

        <q-tab-panel name="manage_clients">
        	
        	<q-table :data="data" title="Manage Clients" row-key="client_name" :columns="columns" selection="single" :selected.sync="selected"/>

        	<div :disabled="!selected.length > 0" class="tb-btn">
		        <q-btn label="Remove" type="reset" color="red" class="q-ml-sm" />
		      </div>

        </q-tab-panel>

        <q-tab-panel name="manage_members">
        	
        	<q-table :data="data2" title="Manage Members" row-key="member_name" :columns="columns2" selection="single" :selected.sync="selected"/>

        	<div :disabled="!selected.length > 0" class="tb-btn">
		        <q-btn label="Edit" type="submit" color="blue"/>
		        <q-btn label="Remove" type="reset" color="red" class="q-ml-sm" />
		      </div>

        </q-tab-panel>

      </q-tab-panels>
  </div>
    </div>
  </div>
</template>
<script>
    import axios from 'axios';

export default {
	data(){
		return {
			panel: 'create',
			isPwd: true,
			model:null,
      client_title:'',
      client_mail:'',
            client_phone: '',
      account_member:'',
      title_member:'',
      project_client:'',
      name_member:'',
            email_member: '',
      options1:['Cordinator','Accounts','Team Member'],
      mobile_member:'',
      member_password:'',
      project_member:'',
			options:['Jenga-Docs','Rony-Quail'],
			members:["member 1", "member 2"],
			selected: [],
			columns:[
	        { name: 'name', align: 'left', label: 'Client Name', field: 'client_name', sortable: true },
	        { name: 'project', align: 'left', label: 'Client Project', field: 'client_project', sortable: true },
	        { name: 'email', align: 'left', label: 'Client Email', field: 'client_email', sortable: true },
	        { name: 'mobile', align: 'left', label: 'Client Mobile', field: 'client_mobile', sortable: true }
         ],
         columns2:[
	        { name: 'name', align: 'left', label: 'Member Name', field: 'member_name', sortable: true },
	        { name: 'project', align: 'left', label: 'Member Project', field: 'member_project', sortable: true },
            { name: 'email', align: 'left', label: 'Member Email', field: 'member_email', sortable: true },
            { name: 'account', align: 'left', label: 'Member AccountType', field: 'member_account', sortable: true },
	        { name: 'mobile', align: 'left', label: 'Member Mobile', field: 'member_mobile', sortable: true }
         ],
         data:[{
         	client_name:'Jane Quail',
         	client_project:'Jenga-Docs',
         	client_email:'j@q.com',
         	client_mobile:'0722690333'
         }],
         data2:[{
         	member_name:'Member1',
          member_project: 'Freelancer',
            member_account:'Accounts',
         	member_email:'member1@email.com',
         	member_mobile:'667789333'
         }]
		}
	},
	methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
        },
        createMember() {

            let member = {
                fullnames: this.name_member,
                email: this.email_member,
                accountType: this.member_account,
                password: this.member_password
            }

            axios.post('/api/freelancer-ke/create-member', member).then( response => {

                console.log(response.data)
   

             });
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