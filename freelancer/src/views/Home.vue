<template>
  <div class="home">
    <div class="q-pa-md">

    	<div class="row">
	      <div class="col table-pd">
	      	<q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Ongoing Projects - 2</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Project Name</th>
            <th class="text-left">Client</th>
            <th class="text-left">Date Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Kenya Fruitcake Company</td>
            <td class="text-left">Jonathan Quail</td>
            <td class="text-left">{{ Date().toLocaleString() }}</td>
          </tr>
          <tr>
            <td class="text-left">Rony Quail</td>
            <td class="text-left">Personal</td>
            <td class="text-left">{{ Date().toLocaleString() }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
	      </div>
	      </div>


	      <div class="row">
	      <div class="col table-pd"><q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Ongoing Tasks - 2</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Task</th>
            <th class="text-left">Project</th>
            <th class="text-left">Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Change Jenga Docs html2canvas library</td>
            <td class="text-left">Jenga-Docs</td>
            <td class="text-left">{{ Date().toLocaleString() }}</td>
          </tr>
          <tr>
            <td class="text-left">Finish Order Functions KFC</td>
            <td class="text-left">Kenya Fruitcake Company</td>
            <td class="text-left">{{ Date().toLocaleString() }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card></div></div>

    <div class="row">
	      <div class="col table-pd"><q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Pending Invoices - Ksh55,000</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Project</th>
            <th class="text-left">Client</th>
            <th class="text-left">Amount</th>
            <th class="text-left">Issued On</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">German Point Online Restuarant</td>
            <td class="text-left">German Point</td>
            <td class="text-left">Ksh 55,000</td>
            <td class="text-left">{{ Date().toLocaleString() }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card></div></div>

    <div class="row">
	      <div class="col table-pd"><q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Paid Invoices - Ksh5,000</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Project</th>
            <th class="text-left">Client</th>
            <th class="text-left">Amount</th>
            <th class="text-left">Issued On</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Jenga-Docs</td>
            <td class="text-left">Jane Quail</td>
            <td class="text-left">Ksh 5,000</td>
            <td class="text-left">{{ Date().toLocaleString() }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card></div></div>

    <div class="row">
	      <div class="col table-pd"><q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Pending Proposals - 1</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Client Proposal</th>
            <th class="text-left">Client</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Jenga-Docs</td>
            <td class="text-left">Jane Quail</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card></div></div>

    <div class="row">
	      <div class="col table-pd"><q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Completed Projects - 2</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Project Title</th>
            <th class="text-left">Client</th>
            <th class="text-left">Date Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Jenga-Docs</td>
            <td class="text-left">Personal</td>
            <td class="text-left">{{ Date().toLocaleString() }}</td>
          </tr>
          <tr>
            <td class="text-left">Rony Quail</td>
            <td class="text-left">Personal</td>
            <td class="text-left">{{ Date().toLocaleString() }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
</div>
</div>

<div class="row">
	      <div class="col table-pd"><q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Completed Tasks - 2</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Task Title</th>
            <th class="text-left">Date Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Push Jenga to Github then Heroku</td>
            <td class="text-left">{{ Date().toLocaleString() }}</td>
          </tr>
          <tr>
            <td class="text-left">Push Rony Quail to Github then Heroku</td>
            <td class="text-left">{{ Date().toLocaleString() }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
</div>
</div>

    	

    </div>


  </div>
</template>

<script>

export default {
  name: 'home',

  data(){
  	return {

      ongoing_projects_count:null,
      ongoing_tasks_count:null,
      pending_invoices_count:null,
      pending_proposals_count:null,
      completed_projects_count:null,
      completed_task_count:null,
      ongoing_projects:[],
      ongoing_tasks:[],
      pending_invoices:[],
      pending_proposals:[],
      completed_projects:[],
      completed_tasks:[]

  	}
  }

}
</script>

<style scoped>

.table-pd{
	padding:5px;
}

</style>
